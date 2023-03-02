# `sagemakerEndpointConfiguration` Submodule <a name="`sagemakerEndpointConfiguration` Submodule" id="@cdktf/provider-aws.sagemakerEndpointConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerEndpointConfiguration <a name="SagemakerEndpointConfiguration" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration aws_sagemaker_endpoint_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfiguration;

SagemakerEndpointConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .productionVariants(IResolvable)
    .productionVariants(java.util.List<SagemakerEndpointConfigurationProductionVariants>)
//  .asyncInferenceConfig(SagemakerEndpointConfigurationAsyncInferenceConfig)
//  .dataCaptureConfig(SagemakerEndpointConfigurationDataCaptureConfig)
//  .id(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .name(java.lang.String)
//  .shadowProductionVariants(IResolvable)
//  .shadowProductionVariants(java.util.List<SagemakerEndpointConfigurationShadowProductionVariants>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.productionVariants">productionVariants</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a>></code> | production_variants block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.asyncInferenceConfig">asyncInferenceConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a></code> | async_inference_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.dataCaptureConfig">dataCaptureConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a></code> | data_capture_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#id SagemakerEndpointConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_arn SagemakerEndpointConfiguration#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#name SagemakerEndpointConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.shadowProductionVariants">shadowProductionVariants</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a>></code> | shadow_production_variants block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#tags SagemakerEndpointConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#tags_all SagemakerEndpointConfiguration#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `productionVariants`<sup>Required</sup> <a name="productionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.productionVariants"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a>>

production_variants block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#production_variants SagemakerEndpointConfiguration#production_variants}

---

##### `asyncInferenceConfig`<sup>Optional</sup> <a name="asyncInferenceConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.asyncInferenceConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a>

async_inference_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#async_inference_config SagemakerEndpointConfiguration#async_inference_config}

---

##### `dataCaptureConfig`<sup>Optional</sup> <a name="dataCaptureConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.dataCaptureConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a>

data_capture_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#data_capture_config SagemakerEndpointConfiguration#data_capture_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#id SagemakerEndpointConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_arn SagemakerEndpointConfiguration#kms_key_arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#name SagemakerEndpointConfiguration#name}.

---

##### `shadowProductionVariants`<sup>Optional</sup> <a name="shadowProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.shadowProductionVariants"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a>>

shadow_production_variants block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#shadow_production_variants SagemakerEndpointConfiguration#shadow_production_variants}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#tags SagemakerEndpointConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#tags_all SagemakerEndpointConfiguration#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putAsyncInferenceConfig">putAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putDataCaptureConfig">putDataCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putProductionVariants">putProductionVariants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putShadowProductionVariants">putShadowProductionVariants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetAsyncInferenceConfig">resetAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetDataCaptureConfig">resetDataCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetShadowProductionVariants">resetShadowProductionVariants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAsyncInferenceConfig` <a name="putAsyncInferenceConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putAsyncInferenceConfig"></a>

```java
public void putAsyncInferenceConfig(SagemakerEndpointConfigurationAsyncInferenceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putAsyncInferenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a>

---

##### `putDataCaptureConfig` <a name="putDataCaptureConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putDataCaptureConfig"></a>

```java
public void putDataCaptureConfig(SagemakerEndpointConfigurationDataCaptureConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putDataCaptureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a>

---

##### `putProductionVariants` <a name="putProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putProductionVariants"></a>

```java
public void putProductionVariants(IResolvable OR java.util.List<SagemakerEndpointConfigurationProductionVariants> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putProductionVariants.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a>>

---

##### `putShadowProductionVariants` <a name="putShadowProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putShadowProductionVariants"></a>

```java
public void putShadowProductionVariants(IResolvable OR java.util.List<SagemakerEndpointConfigurationShadowProductionVariants> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putShadowProductionVariants.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a>>

---

##### `resetAsyncInferenceConfig` <a name="resetAsyncInferenceConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetAsyncInferenceConfig"></a>

```java
public void resetAsyncInferenceConfig()
```

##### `resetDataCaptureConfig` <a name="resetDataCaptureConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetDataCaptureConfig"></a>

```java
public void resetDataCaptureConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetName"></a>

```java
public void resetName()
```

##### `resetShadowProductionVariants` <a name="resetShadowProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetShadowProductionVariants"></a>

```java
public void resetShadowProductionVariants()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfiguration;

SagemakerEndpointConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfiguration;

SagemakerEndpointConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfiguration;

SagemakerEndpointConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.asyncInferenceConfig">asyncInferenceConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dataCaptureConfig">dataCaptureConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference">SagemakerEndpointConfigurationDataCaptureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.productionVariants">productionVariants</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList">SagemakerEndpointConfigurationProductionVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.shadowProductionVariants">shadowProductionVariants</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList">SagemakerEndpointConfigurationShadowProductionVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.asyncInferenceConfigInput">asyncInferenceConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dataCaptureConfigInput">dataCaptureConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.productionVariantsInput">productionVariantsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.shadowProductionVariantsInput">shadowProductionVariantsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `asyncInferenceConfig`<sup>Required</sup> <a name="asyncInferenceConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.asyncInferenceConfig"></a>

```java
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference getAsyncInferenceConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference</a>

---

##### `dataCaptureConfig`<sup>Required</sup> <a name="dataCaptureConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dataCaptureConfig"></a>

```java
public SagemakerEndpointConfigurationDataCaptureConfigOutputReference getDataCaptureConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference">SagemakerEndpointConfigurationDataCaptureConfigOutputReference</a>

---

##### `productionVariants`<sup>Required</sup> <a name="productionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.productionVariants"></a>

```java
public SagemakerEndpointConfigurationProductionVariantsList getProductionVariants();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList">SagemakerEndpointConfigurationProductionVariantsList</a>

---

##### `shadowProductionVariants`<sup>Required</sup> <a name="shadowProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.shadowProductionVariants"></a>

```java
public SagemakerEndpointConfigurationShadowProductionVariantsList getShadowProductionVariants();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList">SagemakerEndpointConfigurationShadowProductionVariantsList</a>

---

##### `asyncInferenceConfigInput`<sup>Optional</sup> <a name="asyncInferenceConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.asyncInferenceConfigInput"></a>

```java
public SagemakerEndpointConfigurationAsyncInferenceConfig getAsyncInferenceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a>

---

##### `dataCaptureConfigInput`<sup>Optional</sup> <a name="dataCaptureConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dataCaptureConfigInput"></a>

```java
public SagemakerEndpointConfigurationDataCaptureConfig getDataCaptureConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `productionVariantsInput`<sup>Optional</sup> <a name="productionVariantsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.productionVariantsInput"></a>

```java
public java.lang.Object getProductionVariantsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a>>

---

##### `shadowProductionVariantsInput`<sup>Optional</sup> <a name="shadowProductionVariantsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.shadowProductionVariantsInput"></a>

```java
public java.lang.Object getShadowProductionVariantsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a>>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerEndpointConfigurationAsyncInferenceConfig <a name="SagemakerEndpointConfigurationAsyncInferenceConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationAsyncInferenceConfig;

SagemakerEndpointConfigurationAsyncInferenceConfig.builder()
    .outputConfig(SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig)
//  .clientConfig(SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a></code> | output_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig.property.clientConfig">clientConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a></code> | client_config block. |

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig.property.outputConfig"></a>

```java
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig getOutputConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a>

output_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#output_config SagemakerEndpointConfiguration#output_config}

---

##### `clientConfig`<sup>Optional</sup> <a name="clientConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig.property.clientConfig"></a>

```java
public SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig getClientConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a>

client_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#client_config SagemakerEndpointConfiguration#client_config}

---

### SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig <a name="SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig;

SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig.builder()
//  .maxConcurrentInvocationsPerInstance(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig.property.maxConcurrentInvocationsPerInstance">maxConcurrentInvocationsPerInstance</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrent_invocations_per_instance SagemakerEndpointConfiguration#max_concurrent_invocations_per_instance}. |

---

##### `maxConcurrentInvocationsPerInstance`<sup>Optional</sup> <a name="maxConcurrentInvocationsPerInstance" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig.property.maxConcurrentInvocationsPerInstance"></a>

```java
public java.lang.Number getMaxConcurrentInvocationsPerInstance();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrent_invocations_per_instance SagemakerEndpointConfiguration#max_concurrent_invocations_per_instance}.

---

### SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig <a name="SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig;

SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.builder()
    .s3OutputPath(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .notificationConfig(SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.s3OutputPath">s3OutputPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#s3_output_path SagemakerEndpointConfiguration#s3_output_path}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | notification_config block. |

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.s3OutputPath"></a>

```java
public java.lang.String getS3OutputPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#s3_output_path SagemakerEndpointConfiguration#s3_output_path}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}.

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.notificationConfig"></a>

```java
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig getNotificationConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#notification_config SagemakerEndpointConfiguration#notification_config}

---

### SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig <a name="SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig;

SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig.builder()
//  .errorTopic(java.lang.String)
//  .successTopic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig.property.errorTopic">errorTopic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#error_topic SagemakerEndpointConfiguration#error_topic}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig.property.successTopic">successTopic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#success_topic SagemakerEndpointConfiguration#success_topic}. |

---

##### `errorTopic`<sup>Optional</sup> <a name="errorTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig.property.errorTopic"></a>

```java
public java.lang.String getErrorTopic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#error_topic SagemakerEndpointConfiguration#error_topic}.

---

##### `successTopic`<sup>Optional</sup> <a name="successTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig.property.successTopic"></a>

```java
public java.lang.String getSuccessTopic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#success_topic SagemakerEndpointConfiguration#success_topic}.

---

### SagemakerEndpointConfigurationConfig <a name="SagemakerEndpointConfigurationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationConfig;

SagemakerEndpointConfigurationConfig.builder()
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
    .productionVariants(IResolvable)
    .productionVariants(java.util.List<SagemakerEndpointConfigurationProductionVariants>)
//  .asyncInferenceConfig(SagemakerEndpointConfigurationAsyncInferenceConfig)
//  .dataCaptureConfig(SagemakerEndpointConfigurationDataCaptureConfig)
//  .id(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .name(java.lang.String)
//  .shadowProductionVariants(IResolvable)
//  .shadowProductionVariants(java.util.List<SagemakerEndpointConfigurationShadowProductionVariants>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.productionVariants">productionVariants</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a>></code> | production_variants block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.asyncInferenceConfig">asyncInferenceConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a></code> | async_inference_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.dataCaptureConfig">dataCaptureConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a></code> | data_capture_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#id SagemakerEndpointConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_arn SagemakerEndpointConfiguration#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#name SagemakerEndpointConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.shadowProductionVariants">shadowProductionVariants</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a>></code> | shadow_production_variants block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#tags SagemakerEndpointConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#tags_all SagemakerEndpointConfiguration#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `productionVariants`<sup>Required</sup> <a name="productionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.productionVariants"></a>

```java
public java.lang.Object getProductionVariants();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a>>

production_variants block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#production_variants SagemakerEndpointConfiguration#production_variants}

---

##### `asyncInferenceConfig`<sup>Optional</sup> <a name="asyncInferenceConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.asyncInferenceConfig"></a>

```java
public SagemakerEndpointConfigurationAsyncInferenceConfig getAsyncInferenceConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a>

async_inference_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#async_inference_config SagemakerEndpointConfiguration#async_inference_config}

---

##### `dataCaptureConfig`<sup>Optional</sup> <a name="dataCaptureConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.dataCaptureConfig"></a>

```java
public SagemakerEndpointConfigurationDataCaptureConfig getDataCaptureConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a>

data_capture_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#data_capture_config SagemakerEndpointConfiguration#data_capture_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#id SagemakerEndpointConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_arn SagemakerEndpointConfiguration#kms_key_arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#name SagemakerEndpointConfiguration#name}.

---

##### `shadowProductionVariants`<sup>Optional</sup> <a name="shadowProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.shadowProductionVariants"></a>

```java
public java.lang.Object getShadowProductionVariants();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a>>

shadow_production_variants block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#shadow_production_variants SagemakerEndpointConfiguration#shadow_production_variants}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#tags SagemakerEndpointConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#tags_all SagemakerEndpointConfiguration#tags_all}.

---

### SagemakerEndpointConfigurationDataCaptureConfig <a name="SagemakerEndpointConfigurationDataCaptureConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationDataCaptureConfig;

SagemakerEndpointConfigurationDataCaptureConfig.builder()
    .captureOptions(IResolvable)
    .captureOptions(java.util.List<SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions>)
    .destinationS3Uri(java.lang.String)
    .initialSamplingPercentage(java.lang.Number)
//  .captureContentTypeHeader(SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader)
//  .enableCapture(java.lang.Boolean)
//  .enableCapture(IResolvable)
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.captureOptions">captureOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a>></code> | capture_options block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.destinationS3Uri">destinationS3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.initialSamplingPercentage">initialSamplingPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_sampling_percentage SagemakerEndpointConfiguration#initial_sampling_percentage}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.captureContentTypeHeader">captureContentTypeHeader</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a></code> | capture_content_type_header block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.enableCapture">enableCapture</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#enable_capture SagemakerEndpointConfiguration#enable_capture}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}. |

---

##### `captureOptions`<sup>Required</sup> <a name="captureOptions" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.captureOptions"></a>

```java
public java.lang.Object getCaptureOptions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a>>

capture_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#capture_options SagemakerEndpointConfiguration#capture_options}

---

##### `destinationS3Uri`<sup>Required</sup> <a name="destinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.destinationS3Uri"></a>

```java
public java.lang.String getDestinationS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}.

---

##### `initialSamplingPercentage`<sup>Required</sup> <a name="initialSamplingPercentage" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.initialSamplingPercentage"></a>

```java
public java.lang.Number getInitialSamplingPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_sampling_percentage SagemakerEndpointConfiguration#initial_sampling_percentage}.

---

##### `captureContentTypeHeader`<sup>Optional</sup> <a name="captureContentTypeHeader" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.captureContentTypeHeader"></a>

```java
public SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader getCaptureContentTypeHeader();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a>

capture_content_type_header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#capture_content_type_header SagemakerEndpointConfiguration#capture_content_type_header}

---

##### `enableCapture`<sup>Optional</sup> <a name="enableCapture" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.enableCapture"></a>

```java
public java.lang.Object getEnableCapture();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#enable_capture SagemakerEndpointConfiguration#enable_capture}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}.

---

### SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader <a name="SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader;

SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader.builder()
//  .csvContentTypes(java.util.List<java.lang.String>)
//  .jsonContentTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader.property.csvContentTypes">csvContentTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#csv_content_types SagemakerEndpointConfiguration#csv_content_types}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader.property.jsonContentTypes">jsonContentTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#json_content_types SagemakerEndpointConfiguration#json_content_types}. |

---

##### `csvContentTypes`<sup>Optional</sup> <a name="csvContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader.property.csvContentTypes"></a>

```java
public java.util.List<java.lang.String> getCsvContentTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#csv_content_types SagemakerEndpointConfiguration#csv_content_types}.

---

##### `jsonContentTypes`<sup>Optional</sup> <a name="jsonContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader.property.jsonContentTypes"></a>

```java
public java.util.List<java.lang.String> getJsonContentTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#json_content_types SagemakerEndpointConfiguration#json_content_types}.

---

### SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions <a name="SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions;

SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions.builder()
    .captureMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions.property.captureMode">captureMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#capture_mode SagemakerEndpointConfiguration#capture_mode}. |

---

##### `captureMode`<sup>Required</sup> <a name="captureMode" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions.property.captureMode"></a>

```java
public java.lang.String getCaptureMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#capture_mode SagemakerEndpointConfiguration#capture_mode}.

---

### SagemakerEndpointConfigurationProductionVariants <a name="SagemakerEndpointConfigurationProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationProductionVariants;

SagemakerEndpointConfigurationProductionVariants.builder()
    .modelName(java.lang.String)
//  .acceleratorType(java.lang.String)
//  .containerStartupHealthCheckTimeoutInSeconds(java.lang.Number)
//  .coreDumpConfig(SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig)
//  .initialInstanceCount(java.lang.Number)
//  .initialVariantWeight(java.lang.Number)
//  .instanceType(java.lang.String)
//  .modelDataDownloadTimeoutInSeconds(java.lang.Number)
//  .serverlessConfig(SagemakerEndpointConfigurationProductionVariantsServerlessConfig)
//  .variantName(java.lang.String)
//  .volumeSizeInGb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.modelName">modelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_name SagemakerEndpointConfiguration#model_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#accelerator_type SagemakerEndpointConfiguration#accelerator_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.containerStartupHealthCheckTimeoutInSeconds">containerStartupHealthCheckTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfiguration#container_startup_health_check_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.coreDumpConfig">coreDumpConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a></code> | core_dump_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.initialInstanceCount">initialInstanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.initialVariantWeight">initialVariantWeight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#instance_type SagemakerEndpointConfiguration#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.modelDataDownloadTimeoutInSeconds">modelDataDownloadTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds SagemakerEndpointConfiguration#model_data_download_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.serverlessConfig">serverlessConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a></code> | serverless_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.variantName">variantName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#variant_name SagemakerEndpointConfiguration#variant_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#volume_size_in_gb SagemakerEndpointConfiguration#volume_size_in_gb}. |

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_name SagemakerEndpointConfiguration#model_name}.

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#accelerator_type SagemakerEndpointConfiguration#accelerator_type}.

---

##### `containerStartupHealthCheckTimeoutInSeconds`<sup>Optional</sup> <a name="containerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```java
public java.lang.Number getContainerStartupHealthCheckTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfiguration#container_startup_health_check_timeout_in_seconds}.

---

##### `coreDumpConfig`<sup>Optional</sup> <a name="coreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.coreDumpConfig"></a>

```java
public SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig getCoreDumpConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a>

core_dump_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#core_dump_config SagemakerEndpointConfiguration#core_dump_config}

---

##### `initialInstanceCount`<sup>Optional</sup> <a name="initialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.initialInstanceCount"></a>

```java
public java.lang.Number getInitialInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}.

---

##### `initialVariantWeight`<sup>Optional</sup> <a name="initialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.initialVariantWeight"></a>

```java
public java.lang.Number getInitialVariantWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#instance_type SagemakerEndpointConfiguration#instance_type}.

---

##### `modelDataDownloadTimeoutInSeconds`<sup>Optional</sup> <a name="modelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.modelDataDownloadTimeoutInSeconds"></a>

```java
public java.lang.Number getModelDataDownloadTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds SagemakerEndpointConfiguration#model_data_download_timeout_in_seconds}.

---

##### `serverlessConfig`<sup>Optional</sup> <a name="serverlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.serverlessConfig"></a>

```java
public SagemakerEndpointConfigurationProductionVariantsServerlessConfig getServerlessConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a>

serverless_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#serverless_config SagemakerEndpointConfiguration#serverless_config}

---

##### `variantName`<sup>Optional</sup> <a name="variantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.variantName"></a>

```java
public java.lang.String getVariantName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#variant_name SagemakerEndpointConfiguration#variant_name}.

---

##### `volumeSizeInGb`<sup>Optional</sup> <a name="volumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.volumeSizeInGb"></a>

```java
public java.lang.Number getVolumeSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#volume_size_in_gb SagemakerEndpointConfiguration#volume_size_in_gb}.

---

### SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig <a name="SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig;

SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig.builder()
    .destinationS3Uri(java.lang.String)
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig.property.destinationS3Uri">destinationS3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}. |

---

##### `destinationS3Uri`<sup>Required</sup> <a name="destinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig.property.destinationS3Uri"></a>

```java
public java.lang.String getDestinationS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}.

---

### SagemakerEndpointConfigurationProductionVariantsServerlessConfig <a name="SagemakerEndpointConfigurationProductionVariantsServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig;

SagemakerEndpointConfigurationProductionVariantsServerlessConfig.builder()
    .maxConcurrency(java.lang.Number)
    .memorySizeInMb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig.property.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrency SagemakerEndpointConfiguration#max_concurrency}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig.property.memorySizeInMb">memorySizeInMb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#memory_size_in_mb SagemakerEndpointConfiguration#memory_size_in_mb}. |

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig.property.maxConcurrency"></a>

```java
public java.lang.Number getMaxConcurrency();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrency SagemakerEndpointConfiguration#max_concurrency}.

---

##### `memorySizeInMb`<sup>Required</sup> <a name="memorySizeInMb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig.property.memorySizeInMb"></a>

```java
public java.lang.Number getMemorySizeInMb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#memory_size_in_mb SagemakerEndpointConfiguration#memory_size_in_mb}.

---

### SagemakerEndpointConfigurationShadowProductionVariants <a name="SagemakerEndpointConfigurationShadowProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationShadowProductionVariants;

SagemakerEndpointConfigurationShadowProductionVariants.builder()
    .modelName(java.lang.String)
//  .acceleratorType(java.lang.String)
//  .containerStartupHealthCheckTimeoutInSeconds(java.lang.Number)
//  .coreDumpConfig(SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig)
//  .initialInstanceCount(java.lang.Number)
//  .initialVariantWeight(java.lang.Number)
//  .instanceType(java.lang.String)
//  .modelDataDownloadTimeoutInSeconds(java.lang.Number)
//  .serverlessConfig(SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig)
//  .variantName(java.lang.String)
//  .volumeSizeInGb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.modelName">modelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_name SagemakerEndpointConfiguration#model_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#accelerator_type SagemakerEndpointConfiguration#accelerator_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.containerStartupHealthCheckTimeoutInSeconds">containerStartupHealthCheckTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfiguration#container_startup_health_check_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.coreDumpConfig">coreDumpConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a></code> | core_dump_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.initialInstanceCount">initialInstanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.initialVariantWeight">initialVariantWeight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#instance_type SagemakerEndpointConfiguration#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.modelDataDownloadTimeoutInSeconds">modelDataDownloadTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds SagemakerEndpointConfiguration#model_data_download_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.serverlessConfig">serverlessConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a></code> | serverless_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.variantName">variantName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#variant_name SagemakerEndpointConfiguration#variant_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#volume_size_in_gb SagemakerEndpointConfiguration#volume_size_in_gb}. |

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_name SagemakerEndpointConfiguration#model_name}.

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#accelerator_type SagemakerEndpointConfiguration#accelerator_type}.

---

##### `containerStartupHealthCheckTimeoutInSeconds`<sup>Optional</sup> <a name="containerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```java
public java.lang.Number getContainerStartupHealthCheckTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfiguration#container_startup_health_check_timeout_in_seconds}.

---

##### `coreDumpConfig`<sup>Optional</sup> <a name="coreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.coreDumpConfig"></a>

```java
public SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig getCoreDumpConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a>

core_dump_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#core_dump_config SagemakerEndpointConfiguration#core_dump_config}

---

##### `initialInstanceCount`<sup>Optional</sup> <a name="initialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.initialInstanceCount"></a>

```java
public java.lang.Number getInitialInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}.

---

##### `initialVariantWeight`<sup>Optional</sup> <a name="initialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.initialVariantWeight"></a>

```java
public java.lang.Number getInitialVariantWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#instance_type SagemakerEndpointConfiguration#instance_type}.

---

##### `modelDataDownloadTimeoutInSeconds`<sup>Optional</sup> <a name="modelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.modelDataDownloadTimeoutInSeconds"></a>

```java
public java.lang.Number getModelDataDownloadTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds SagemakerEndpointConfiguration#model_data_download_timeout_in_seconds}.

---

##### `serverlessConfig`<sup>Optional</sup> <a name="serverlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.serverlessConfig"></a>

```java
public SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig getServerlessConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a>

serverless_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#serverless_config SagemakerEndpointConfiguration#serverless_config}

---

##### `variantName`<sup>Optional</sup> <a name="variantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.variantName"></a>

```java
public java.lang.String getVariantName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#variant_name SagemakerEndpointConfiguration#variant_name}.

---

##### `volumeSizeInGb`<sup>Optional</sup> <a name="volumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.volumeSizeInGb"></a>

```java
public java.lang.Number getVolumeSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#volume_size_in_gb SagemakerEndpointConfiguration#volume_size_in_gb}.

---

### SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig <a name="SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig;

SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig.builder()
    .destinationS3Uri(java.lang.String)
    .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig.property.destinationS3Uri">destinationS3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}. |

---

##### `destinationS3Uri`<sup>Required</sup> <a name="destinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig.property.destinationS3Uri"></a>

```java
public java.lang.String getDestinationS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}.

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}.

---

### SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig <a name="SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig;

SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig.builder()
    .maxConcurrency(java.lang.Number)
    .memorySizeInMb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig.property.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrency SagemakerEndpointConfiguration#max_concurrency}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig.property.memorySizeInMb">memorySizeInMb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#memory_size_in_mb SagemakerEndpointConfiguration#memory_size_in_mb}. |

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig.property.maxConcurrency"></a>

```java
public java.lang.Number getMaxConcurrency();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrency SagemakerEndpointConfiguration#max_concurrency}.

---

##### `memorySizeInMb`<sup>Required</sup> <a name="memorySizeInMb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig.property.memorySizeInMb"></a>

```java
public java.lang.Number getMemorySizeInMb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#memory_size_in_mb SagemakerEndpointConfiguration#memory_size_in_mb}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference <a name="SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference;

new SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.resetMaxConcurrentInvocationsPerInstance">resetMaxConcurrentInvocationsPerInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxConcurrentInvocationsPerInstance` <a name="resetMaxConcurrentInvocationsPerInstance" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.resetMaxConcurrentInvocationsPerInstance"></a>

```java
public void resetMaxConcurrentInvocationsPerInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstanceInput">maxConcurrentInvocationsPerInstanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstance">maxConcurrentInvocationsPerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxConcurrentInvocationsPerInstanceInput`<sup>Optional</sup> <a name="maxConcurrentInvocationsPerInstanceInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstanceInput"></a>

```java
public java.lang.Number getMaxConcurrentInvocationsPerInstanceInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentInvocationsPerInstance`<sup>Required</sup> <a name="maxConcurrentInvocationsPerInstance" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstance"></a>

```java
public java.lang.Number getMaxConcurrentInvocationsPerInstance();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.internalValue"></a>

```java
public SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a>

---


### SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference <a name="SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference;

new SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetErrorTopic">resetErrorTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetSuccessTopic">resetSuccessTopic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetErrorTopic` <a name="resetErrorTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetErrorTopic"></a>

```java
public void resetErrorTopic()
```

##### `resetSuccessTopic` <a name="resetSuccessTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetSuccessTopic"></a>

```java
public void resetSuccessTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopicInput">errorTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopicInput">successTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic">errorTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic">successTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorTopicInput`<sup>Optional</sup> <a name="errorTopicInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopicInput"></a>

```java
public java.lang.String getErrorTopicInput();
```

- *Type:* java.lang.String

---

##### `successTopicInput`<sup>Optional</sup> <a name="successTopicInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopicInput"></a>

```java
public java.lang.String getSuccessTopicInput();
```

- *Type:* java.lang.String

---

##### `errorTopic`<sup>Required</sup> <a name="errorTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic"></a>

```java
public java.lang.String getErrorTopic();
```

- *Type:* java.lang.String

---

##### `successTopic`<sup>Required</sup> <a name="successTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic"></a>

```java
public java.lang.String getSuccessTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue"></a>

```java
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a>

---


### SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference <a name="SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference;

new SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig">putNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resetNotificationConfig">resetNotificationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotificationConfig` <a name="putNotificationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig"></a>

```java
public void putNotificationConfig(SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a>

---

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetNotificationConfig` <a name="resetNotificationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resetNotificationConfig"></a>

```java
public void resetNotificationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfigInput">notificationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPathInput">s3OutputPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath">s3OutputPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notificationConfig`<sup>Required</sup> <a name="notificationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig"></a>

```java
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference getNotificationConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `notificationConfigInput`<sup>Optional</sup> <a name="notificationConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfigInput"></a>

```java
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig getNotificationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a>

---

##### `s3OutputPathInput`<sup>Optional</sup> <a name="s3OutputPathInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPathInput"></a>

```java
public java.lang.String getS3OutputPathInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath"></a>

```java
public java.lang.String getS3OutputPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.internalValue"></a>

```java
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a>

---


### SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference <a name="SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference;

new SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putClientConfig">putClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putOutputConfig">putOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.resetClientConfig">resetClientConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientConfig` <a name="putClientConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putClientConfig"></a>

```java
public void putClientConfig(SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putClientConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a>

---

##### `putOutputConfig` <a name="putOutputConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putOutputConfig"></a>

```java
public void putOutputConfig(SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a>

---

##### `resetClientConfig` <a name="resetClientConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.resetClientConfig"></a>

```java
public void resetClientConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.clientConfig">clientConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.clientConfigInput">clientConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.outputConfigInput">outputConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientConfig`<sup>Required</sup> <a name="clientConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.clientConfig"></a>

```java
public SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference getClientConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference</a>

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.outputConfig"></a>

```java
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference getOutputConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference</a>

---

##### `clientConfigInput`<sup>Optional</sup> <a name="clientConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.clientConfigInput"></a>

```java
public SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig getClientConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a>

---

##### `outputConfigInput`<sup>Optional</sup> <a name="outputConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.outputConfigInput"></a>

```java
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig getOutputConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.internalValue"></a>

```java
public SagemakerEndpointConfigurationAsyncInferenceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a>

---


### SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference <a name="SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference;

new SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resetCsvContentTypes">resetCsvContentTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resetJsonContentTypes">resetJsonContentTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCsvContentTypes` <a name="resetCsvContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resetCsvContentTypes"></a>

```java
public void resetCsvContentTypes()
```

##### `resetJsonContentTypes` <a name="resetJsonContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resetJsonContentTypes"></a>

```java
public void resetJsonContentTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypesInput">csvContentTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypesInput">jsonContentTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypes">csvContentTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypes">jsonContentTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `csvContentTypesInput`<sup>Optional</sup> <a name="csvContentTypesInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypesInput"></a>

```java
public java.util.List<java.lang.String> getCsvContentTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jsonContentTypesInput`<sup>Optional</sup> <a name="jsonContentTypesInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypesInput"></a>

```java
public java.util.List<java.lang.String> getJsonContentTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `csvContentTypes`<sup>Required</sup> <a name="csvContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypes"></a>

```java
public java.util.List<java.lang.String> getCsvContentTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jsonContentTypes`<sup>Required</sup> <a name="jsonContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypes"></a>

```java
public java.util.List<java.lang.String> getJsonContentTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.internalValue"></a>

```java
public SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a>

---


### SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList <a name="SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList;

new SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.get"></a>

```java
public SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a>>

---


### SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference <a name="SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference;

new SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.captureModeInput">captureModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.captureMode">captureMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `captureModeInput`<sup>Optional</sup> <a name="captureModeInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.captureModeInput"></a>

```java
public java.lang.String getCaptureModeInput();
```

- *Type:* java.lang.String

---

##### `captureMode`<sup>Required</sup> <a name="captureMode" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.captureMode"></a>

```java
public java.lang.String getCaptureMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a> OR com.hashicorp.cdktf.IResolvable

---


### SagemakerEndpointConfigurationDataCaptureConfigOutputReference <a name="SagemakerEndpointConfigurationDataCaptureConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference;

new SagemakerEndpointConfigurationDataCaptureConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureContentTypeHeader">putCaptureContentTypeHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureOptions">putCaptureOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetCaptureContentTypeHeader">resetCaptureContentTypeHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetEnableCapture">resetEnableCapture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCaptureContentTypeHeader` <a name="putCaptureContentTypeHeader" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureContentTypeHeader"></a>

```java
public void putCaptureContentTypeHeader(SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureContentTypeHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a>

---

##### `putCaptureOptions` <a name="putCaptureOptions" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureOptions"></a>

```java
public void putCaptureOptions(IResolvable OR java.util.List<SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureOptions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a>>

---

##### `resetCaptureContentTypeHeader` <a name="resetCaptureContentTypeHeader" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetCaptureContentTypeHeader"></a>

```java
public void resetCaptureContentTypeHeader()
```

##### `resetEnableCapture` <a name="resetEnableCapture" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetEnableCapture"></a>

```java
public void resetEnableCapture()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureContentTypeHeader">captureContentTypeHeader</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureOptions">captureOptions</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureContentTypeHeaderInput">captureContentTypeHeaderInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureOptionsInput">captureOptionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.destinationS3UriInput">destinationS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.enableCaptureInput">enableCaptureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.initialSamplingPercentageInput">initialSamplingPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.destinationS3Uri">destinationS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.enableCapture">enableCapture</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.initialSamplingPercentage">initialSamplingPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `captureContentTypeHeader`<sup>Required</sup> <a name="captureContentTypeHeader" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureContentTypeHeader"></a>

```java
public SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference getCaptureContentTypeHeader();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference</a>

---

##### `captureOptions`<sup>Required</sup> <a name="captureOptions" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureOptions"></a>

```java
public SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList getCaptureOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList</a>

---

##### `captureContentTypeHeaderInput`<sup>Optional</sup> <a name="captureContentTypeHeaderInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureContentTypeHeaderInput"></a>

```java
public SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader getCaptureContentTypeHeaderInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a>

---

##### `captureOptionsInput`<sup>Optional</sup> <a name="captureOptionsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureOptionsInput"></a>

```java
public java.lang.Object getCaptureOptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a>>

---

##### `destinationS3UriInput`<sup>Optional</sup> <a name="destinationS3UriInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.destinationS3UriInput"></a>

```java
public java.lang.String getDestinationS3UriInput();
```

- *Type:* java.lang.String

---

##### `enableCaptureInput`<sup>Optional</sup> <a name="enableCaptureInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.enableCaptureInput"></a>

```java
public java.lang.Object getEnableCaptureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `initialSamplingPercentageInput`<sup>Optional</sup> <a name="initialSamplingPercentageInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.initialSamplingPercentageInput"></a>

```java
public java.lang.Number getInitialSamplingPercentageInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `destinationS3Uri`<sup>Required</sup> <a name="destinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.destinationS3Uri"></a>

```java
public java.lang.String getDestinationS3Uri();
```

- *Type:* java.lang.String

---

##### `enableCapture`<sup>Required</sup> <a name="enableCapture" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.enableCapture"></a>

```java
public java.lang.Object getEnableCapture();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `initialSamplingPercentage`<sup>Required</sup> <a name="initialSamplingPercentage" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.initialSamplingPercentage"></a>

```java
public java.lang.Number getInitialSamplingPercentage();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.internalValue"></a>

```java
public SagemakerEndpointConfigurationDataCaptureConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a>

---


### SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference <a name="SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference;

new SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.destinationS3UriInput">destinationS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri">destinationS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationS3UriInput`<sup>Optional</sup> <a name="destinationS3UriInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.destinationS3UriInput"></a>

```java
public java.lang.String getDestinationS3UriInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `destinationS3Uri`<sup>Required</sup> <a name="destinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri"></a>

```java
public java.lang.String getDestinationS3Uri();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.internalValue"></a>

```java
public SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a>

---


### SagemakerEndpointConfigurationProductionVariantsList <a name="SagemakerEndpointConfigurationProductionVariantsList" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationProductionVariantsList;

new SagemakerEndpointConfigurationProductionVariantsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.get"></a>

```java
public SagemakerEndpointConfigurationProductionVariantsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a>>

---


### SagemakerEndpointConfigurationProductionVariantsOutputReference <a name="SagemakerEndpointConfigurationProductionVariantsOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationProductionVariantsOutputReference;

new SagemakerEndpointConfigurationProductionVariantsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putCoreDumpConfig">putCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putServerlessConfig">putServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds">resetContainerStartupHealthCheckTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetCoreDumpConfig">resetCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInitialInstanceCount">resetInitialInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInitialVariantWeight">resetInitialVariantWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetModelDataDownloadTimeoutInSeconds">resetModelDataDownloadTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetServerlessConfig">resetServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetVariantName">resetVariantName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetVolumeSizeInGb">resetVolumeSizeInGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCoreDumpConfig` <a name="putCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putCoreDumpConfig"></a>

```java
public void putCoreDumpConfig(SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putCoreDumpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a>

---

##### `putServerlessConfig` <a name="putServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putServerlessConfig"></a>

```java
public void putServerlessConfig(SagemakerEndpointConfigurationProductionVariantsServerlessConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putServerlessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a>

---

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetAcceleratorType"></a>

```java
public void resetAcceleratorType()
```

##### `resetContainerStartupHealthCheckTimeoutInSeconds` <a name="resetContainerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds"></a>

```java
public void resetContainerStartupHealthCheckTimeoutInSeconds()
```

##### `resetCoreDumpConfig` <a name="resetCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetCoreDumpConfig"></a>

```java
public void resetCoreDumpConfig()
```

##### `resetInitialInstanceCount` <a name="resetInitialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInitialInstanceCount"></a>

```java
public void resetInitialInstanceCount()
```

##### `resetInitialVariantWeight` <a name="resetInitialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInitialVariantWeight"></a>

```java
public void resetInitialVariantWeight()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetModelDataDownloadTimeoutInSeconds` <a name="resetModelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetModelDataDownloadTimeoutInSeconds"></a>

```java
public void resetModelDataDownloadTimeoutInSeconds()
```

##### `resetServerlessConfig` <a name="resetServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetServerlessConfig"></a>

```java
public void resetServerlessConfig()
```

##### `resetVariantName` <a name="resetVariantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetVariantName"></a>

```java
public void resetVariantName()
```

##### `resetVolumeSizeInGb` <a name="resetVolumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetVolumeSizeInGb"></a>

```java
public void resetVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.coreDumpConfig">coreDumpConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.serverlessConfig">serverlessConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference">SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput">containerStartupHealthCheckTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.coreDumpConfigInput">coreDumpConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialInstanceCountInput">initialInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialVariantWeightInput">initialVariantWeightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSecondsInput">modelDataDownloadTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelNameInput">modelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.serverlessConfigInput">serverlessConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.variantNameInput">variantNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.volumeSizeInGbInput">volumeSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">containerStartupHealthCheckTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialInstanceCount">initialInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialVariantWeight">initialVariantWeight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds">modelDataDownloadTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelName">modelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.variantName">variantName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coreDumpConfig`<sup>Required</sup> <a name="coreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.coreDumpConfig"></a>

```java
public SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference getCoreDumpConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference</a>

---

##### `serverlessConfig`<sup>Required</sup> <a name="serverlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.serverlessConfig"></a>

```java
public SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference getServerlessConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference">SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference</a>

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.acceleratorTypeInput"></a>

```java
public java.lang.String getAcceleratorTypeInput();
```

- *Type:* java.lang.String

---

##### `containerStartupHealthCheckTimeoutInSecondsInput`<sup>Optional</sup> <a name="containerStartupHealthCheckTimeoutInSecondsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput"></a>

```java
public java.lang.Number getContainerStartupHealthCheckTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `coreDumpConfigInput`<sup>Optional</sup> <a name="coreDumpConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.coreDumpConfigInput"></a>

```java
public SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig getCoreDumpConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a>

---

##### `initialInstanceCountInput`<sup>Optional</sup> <a name="initialInstanceCountInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialInstanceCountInput"></a>

```java
public java.lang.Number getInitialInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `initialVariantWeightInput`<sup>Optional</sup> <a name="initialVariantWeightInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialVariantWeightInput"></a>

```java
public java.lang.Number getInitialVariantWeightInput();
```

- *Type:* java.lang.Number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `modelDataDownloadTimeoutInSecondsInput`<sup>Optional</sup> <a name="modelDataDownloadTimeoutInSecondsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSecondsInput"></a>

```java
public java.lang.Number getModelDataDownloadTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelNameInput"></a>

```java
public java.lang.String getModelNameInput();
```

- *Type:* java.lang.String

---

##### `serverlessConfigInput`<sup>Optional</sup> <a name="serverlessConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.serverlessConfigInput"></a>

```java
public SagemakerEndpointConfigurationProductionVariantsServerlessConfig getServerlessConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a>

---

##### `variantNameInput`<sup>Optional</sup> <a name="variantNameInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.variantNameInput"></a>

```java
public java.lang.String getVariantNameInput();
```

- *Type:* java.lang.String

---

##### `volumeSizeInGbInput`<sup>Optional</sup> <a name="volumeSizeInGbInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.volumeSizeInGbInput"></a>

```java
public java.lang.Number getVolumeSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `containerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="containerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```java
public java.lang.Number getContainerStartupHealthCheckTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `initialInstanceCount`<sup>Required</sup> <a name="initialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialInstanceCount"></a>

```java
public java.lang.Number getInitialInstanceCount();
```

- *Type:* java.lang.Number

---

##### `initialVariantWeight`<sup>Required</sup> <a name="initialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialVariantWeight"></a>

```java
public java.lang.Number getInitialVariantWeight();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `modelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="modelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```java
public java.lang.Number getModelDataDownloadTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

---

##### `variantName`<sup>Required</sup> <a name="variantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.variantName"></a>

```java
public java.lang.String getVariantName();
```

- *Type:* java.lang.String

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.volumeSizeInGb"></a>

```java
public java.lang.Number getVolumeSizeInGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a> OR com.hashicorp.cdktf.IResolvable

---


### SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference <a name="SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference;

new SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.maxConcurrencyInput">maxConcurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.memorySizeInMbInput">memorySizeInMbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb">memorySizeInMb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxConcurrencyInput`<sup>Optional</sup> <a name="maxConcurrencyInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.maxConcurrencyInput"></a>

```java
public java.lang.Number getMaxConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `memorySizeInMbInput`<sup>Optional</sup> <a name="memorySizeInMbInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.memorySizeInMbInput"></a>

```java
public java.lang.Number getMemorySizeInMbInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.maxConcurrency"></a>

```java
public java.lang.Number getMaxConcurrency();
```

- *Type:* java.lang.Number

---

##### `memorySizeInMb`<sup>Required</sup> <a name="memorySizeInMb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb"></a>

```java
public java.lang.Number getMemorySizeInMb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.internalValue"></a>

```java
public SagemakerEndpointConfigurationProductionVariantsServerlessConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a>

---


### SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference <a name="SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference;

new SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3UriInput">destinationS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri">destinationS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationS3UriInput`<sup>Optional</sup> <a name="destinationS3UriInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3UriInput"></a>

```java
public java.lang.String getDestinationS3UriInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `destinationS3Uri`<sup>Required</sup> <a name="destinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri"></a>

```java
public java.lang.String getDestinationS3Uri();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.internalValue"></a>

```java
public SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a>

---


### SagemakerEndpointConfigurationShadowProductionVariantsList <a name="SagemakerEndpointConfigurationShadowProductionVariantsList" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationShadowProductionVariantsList;

new SagemakerEndpointConfigurationShadowProductionVariantsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.get"></a>

```java
public SagemakerEndpointConfigurationShadowProductionVariantsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a>>

---


### SagemakerEndpointConfigurationShadowProductionVariantsOutputReference <a name="SagemakerEndpointConfigurationShadowProductionVariantsOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference;

new SagemakerEndpointConfigurationShadowProductionVariantsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putCoreDumpConfig">putCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putServerlessConfig">putServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds">resetContainerStartupHealthCheckTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetCoreDumpConfig">resetCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInitialInstanceCount">resetInitialInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInitialVariantWeight">resetInitialVariantWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetModelDataDownloadTimeoutInSeconds">resetModelDataDownloadTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetServerlessConfig">resetServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetVariantName">resetVariantName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetVolumeSizeInGb">resetVolumeSizeInGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCoreDumpConfig` <a name="putCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putCoreDumpConfig"></a>

```java
public void putCoreDumpConfig(SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putCoreDumpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a>

---

##### `putServerlessConfig` <a name="putServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putServerlessConfig"></a>

```java
public void putServerlessConfig(SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putServerlessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a>

---

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetAcceleratorType"></a>

```java
public void resetAcceleratorType()
```

##### `resetContainerStartupHealthCheckTimeoutInSeconds` <a name="resetContainerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds"></a>

```java
public void resetContainerStartupHealthCheckTimeoutInSeconds()
```

##### `resetCoreDumpConfig` <a name="resetCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetCoreDumpConfig"></a>

```java
public void resetCoreDumpConfig()
```

##### `resetInitialInstanceCount` <a name="resetInitialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInitialInstanceCount"></a>

```java
public void resetInitialInstanceCount()
```

##### `resetInitialVariantWeight` <a name="resetInitialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInitialVariantWeight"></a>

```java
public void resetInitialVariantWeight()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetModelDataDownloadTimeoutInSeconds` <a name="resetModelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetModelDataDownloadTimeoutInSeconds"></a>

```java
public void resetModelDataDownloadTimeoutInSeconds()
```

##### `resetServerlessConfig` <a name="resetServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetServerlessConfig"></a>

```java
public void resetServerlessConfig()
```

##### `resetVariantName` <a name="resetVariantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetVariantName"></a>

```java
public void resetVariantName()
```

##### `resetVolumeSizeInGb` <a name="resetVolumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetVolumeSizeInGb"></a>

```java
public void resetVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.coreDumpConfig">coreDumpConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.serverlessConfig">serverlessConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput">containerStartupHealthCheckTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.coreDumpConfigInput">coreDumpConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialInstanceCountInput">initialInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialVariantWeightInput">initialVariantWeightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSecondsInput">modelDataDownloadTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelNameInput">modelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.serverlessConfigInput">serverlessConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.variantNameInput">variantNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.volumeSizeInGbInput">volumeSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">containerStartupHealthCheckTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialInstanceCount">initialInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialVariantWeight">initialVariantWeight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds">modelDataDownloadTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelName">modelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.variantName">variantName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coreDumpConfig`<sup>Required</sup> <a name="coreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.coreDumpConfig"></a>

```java
public SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference getCoreDumpConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference</a>

---

##### `serverlessConfig`<sup>Required</sup> <a name="serverlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.serverlessConfig"></a>

```java
public SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference getServerlessConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference</a>

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.acceleratorTypeInput"></a>

```java
public java.lang.String getAcceleratorTypeInput();
```

- *Type:* java.lang.String

---

##### `containerStartupHealthCheckTimeoutInSecondsInput`<sup>Optional</sup> <a name="containerStartupHealthCheckTimeoutInSecondsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput"></a>

```java
public java.lang.Number getContainerStartupHealthCheckTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `coreDumpConfigInput`<sup>Optional</sup> <a name="coreDumpConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.coreDumpConfigInput"></a>

```java
public SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig getCoreDumpConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a>

---

##### `initialInstanceCountInput`<sup>Optional</sup> <a name="initialInstanceCountInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialInstanceCountInput"></a>

```java
public java.lang.Number getInitialInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `initialVariantWeightInput`<sup>Optional</sup> <a name="initialVariantWeightInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialVariantWeightInput"></a>

```java
public java.lang.Number getInitialVariantWeightInput();
```

- *Type:* java.lang.Number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `modelDataDownloadTimeoutInSecondsInput`<sup>Optional</sup> <a name="modelDataDownloadTimeoutInSecondsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSecondsInput"></a>

```java
public java.lang.Number getModelDataDownloadTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelNameInput"></a>

```java
public java.lang.String getModelNameInput();
```

- *Type:* java.lang.String

---

##### `serverlessConfigInput`<sup>Optional</sup> <a name="serverlessConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.serverlessConfigInput"></a>

```java
public SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig getServerlessConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a>

---

##### `variantNameInput`<sup>Optional</sup> <a name="variantNameInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.variantNameInput"></a>

```java
public java.lang.String getVariantNameInput();
```

- *Type:* java.lang.String

---

##### `volumeSizeInGbInput`<sup>Optional</sup> <a name="volumeSizeInGbInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.volumeSizeInGbInput"></a>

```java
public java.lang.Number getVolumeSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `containerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="containerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```java
public java.lang.Number getContainerStartupHealthCheckTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `initialInstanceCount`<sup>Required</sup> <a name="initialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialInstanceCount"></a>

```java
public java.lang.Number getInitialInstanceCount();
```

- *Type:* java.lang.Number

---

##### `initialVariantWeight`<sup>Required</sup> <a name="initialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialVariantWeight"></a>

```java
public java.lang.Number getInitialVariantWeight();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `modelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="modelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```java
public java.lang.Number getModelDataDownloadTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

---

##### `variantName`<sup>Required</sup> <a name="variantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.variantName"></a>

```java
public java.lang.String getVariantName();
```

- *Type:* java.lang.String

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.volumeSizeInGb"></a>

```java
public java.lang.Number getVolumeSizeInGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a> OR com.hashicorp.cdktf.IResolvable

---


### SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference <a name="SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_endpoint_configuration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference;

new SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrencyInput">maxConcurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMbInput">memorySizeInMbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb">memorySizeInMb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxConcurrencyInput`<sup>Optional</sup> <a name="maxConcurrencyInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrencyInput"></a>

```java
public java.lang.Number getMaxConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `memorySizeInMbInput`<sup>Optional</sup> <a name="memorySizeInMbInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMbInput"></a>

```java
public java.lang.Number getMemorySizeInMbInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrency"></a>

```java
public java.lang.Number getMaxConcurrency();
```

- *Type:* java.lang.Number

---

##### `memorySizeInMb`<sup>Required</sup> <a name="memorySizeInMb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb"></a>

```java
public java.lang.Number getMemorySizeInMb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.internalValue"></a>

```java
public SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a>

---



