# `aws_sagemaker_pipeline`

Refer to the Terraform Registory for docs: [`aws_sagemaker_pipeline`](https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline).

# `sagemakerPipeline` Submodule <a name="`sagemakerPipeline` Submodule" id="@cdktf/provider-aws.sagemakerPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerPipeline <a name="SagemakerPipeline" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline aws_sagemaker_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_pipeline.SagemakerPipeline;

SagemakerPipeline.Builder.create(Construct scope, java.lang.String id)
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
    .pipelineDisplayName(java.lang.String)
    .pipelineName(java.lang.String)
//  .id(java.lang.String)
//  .parallelismConfiguration(SagemakerPipelineParallelismConfiguration)
//  .pipelineDefinition(java.lang.String)
//  .pipelineDefinitionS3Location(SagemakerPipelinePipelineDefinitionS3Location)
//  .pipelineDescription(java.lang.String)
//  .roleArn(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.pipelineDisplayName">pipelineDisplayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_display_name SagemakerPipeline#pipeline_display_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.pipelineName">pipelineName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_name SagemakerPipeline#pipeline_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#id SagemakerPipeline#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.parallelismConfiguration">parallelismConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a></code> | parallelism_configuration block. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.pipelineDefinition">pipelineDefinition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_definition SagemakerPipeline#pipeline_definition}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.pipelineDefinitionS3Location">pipelineDefinitionS3Location</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a></code> | pipeline_definition_s3_location block. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.pipelineDescription">pipelineDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_description SagemakerPipeline#pipeline_description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#role_arn SagemakerPipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#tags SagemakerPipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#tags_all SagemakerPipeline#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pipelineDisplayName`<sup>Required</sup> <a name="pipelineDisplayName" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.pipelineDisplayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_display_name SagemakerPipeline#pipeline_display_name}.

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.pipelineName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_name SagemakerPipeline#pipeline_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#id SagemakerPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parallelismConfiguration`<sup>Optional</sup> <a name="parallelismConfiguration" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.parallelismConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a>

parallelism_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#parallelism_configuration SagemakerPipeline#parallelism_configuration}

---

##### `pipelineDefinition`<sup>Optional</sup> <a name="pipelineDefinition" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.pipelineDefinition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_definition SagemakerPipeline#pipeline_definition}.

---

##### `pipelineDefinitionS3Location`<sup>Optional</sup> <a name="pipelineDefinitionS3Location" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.pipelineDefinitionS3Location"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a>

pipeline_definition_s3_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_definition_s3_location SagemakerPipeline#pipeline_definition_s3_location}

---

##### `pipelineDescription`<sup>Optional</sup> <a name="pipelineDescription" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.pipelineDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_description SagemakerPipeline#pipeline_description}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#role_arn SagemakerPipeline#role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#tags SagemakerPipeline#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#tags_all SagemakerPipeline#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.putParallelismConfiguration">putParallelismConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.putPipelineDefinitionS3Location">putPipelineDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetParallelismConfiguration">resetParallelismConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDefinition">resetPipelineDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDefinitionS3Location">resetPipelineDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDescription">resetPipelineDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putParallelismConfiguration` <a name="putParallelismConfiguration" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.putParallelismConfiguration"></a>

```java
public void putParallelismConfiguration(SagemakerPipelineParallelismConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.putParallelismConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a>

---

##### `putPipelineDefinitionS3Location` <a name="putPipelineDefinitionS3Location" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.putPipelineDefinitionS3Location"></a>

```java
public void putPipelineDefinitionS3Location(SagemakerPipelinePipelineDefinitionS3Location value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.putPipelineDefinitionS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetId"></a>

```java
public void resetId()
```

##### `resetParallelismConfiguration` <a name="resetParallelismConfiguration" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetParallelismConfiguration"></a>

```java
public void resetParallelismConfiguration()
```

##### `resetPipelineDefinition` <a name="resetPipelineDefinition" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDefinition"></a>

```java
public void resetPipelineDefinition()
```

##### `resetPipelineDefinitionS3Location` <a name="resetPipelineDefinitionS3Location" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDefinitionS3Location"></a>

```java
public void resetPipelineDefinitionS3Location()
```

##### `resetPipelineDescription` <a name="resetPipelineDescription" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDescription"></a>

```java
public void resetPipelineDescription()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_pipeline.SagemakerPipeline;

SagemakerPipeline.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_pipeline.SagemakerPipeline;

SagemakerPipeline.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_pipeline.SagemakerPipeline;

SagemakerPipeline.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.parallelismConfiguration">parallelismConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference">SagemakerPipelineParallelismConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionS3Location">pipelineDefinitionS3Location</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference">SagemakerPipelinePipelineDefinitionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.parallelismConfigurationInput">parallelismConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionInput">pipelineDefinitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionS3LocationInput">pipelineDefinitionS3LocationInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDescriptionInput">pipelineDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDisplayNameInput">pipelineDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineNameInput">pipelineNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinition">pipelineDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDescription">pipelineDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDisplayName">pipelineDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineName">pipelineName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `parallelismConfiguration`<sup>Required</sup> <a name="parallelismConfiguration" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.parallelismConfiguration"></a>

```java
public SagemakerPipelineParallelismConfigurationOutputReference getParallelismConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference">SagemakerPipelineParallelismConfigurationOutputReference</a>

---

##### `pipelineDefinitionS3Location`<sup>Required</sup> <a name="pipelineDefinitionS3Location" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionS3Location"></a>

```java
public SagemakerPipelinePipelineDefinitionS3LocationOutputReference getPipelineDefinitionS3Location();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference">SagemakerPipelinePipelineDefinitionS3LocationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parallelismConfigurationInput`<sup>Optional</sup> <a name="parallelismConfigurationInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.parallelismConfigurationInput"></a>

```java
public SagemakerPipelineParallelismConfiguration getParallelismConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a>

---

##### `pipelineDefinitionInput`<sup>Optional</sup> <a name="pipelineDefinitionInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionInput"></a>

```java
public java.lang.String getPipelineDefinitionInput();
```

- *Type:* java.lang.String

---

##### `pipelineDefinitionS3LocationInput`<sup>Optional</sup> <a name="pipelineDefinitionS3LocationInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionS3LocationInput"></a>

```java
public SagemakerPipelinePipelineDefinitionS3Location getPipelineDefinitionS3LocationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a>

---

##### `pipelineDescriptionInput`<sup>Optional</sup> <a name="pipelineDescriptionInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDescriptionInput"></a>

```java
public java.lang.String getPipelineDescriptionInput();
```

- *Type:* java.lang.String

---

##### `pipelineDisplayNameInput`<sup>Optional</sup> <a name="pipelineDisplayNameInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDisplayNameInput"></a>

```java
public java.lang.String getPipelineDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `pipelineNameInput`<sup>Optional</sup> <a name="pipelineNameInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineNameInput"></a>

```java
public java.lang.String getPipelineNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `pipelineDefinition`<sup>Required</sup> <a name="pipelineDefinition" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinition"></a>

```java
public java.lang.String getPipelineDefinition();
```

- *Type:* java.lang.String

---

##### `pipelineDescription`<sup>Required</sup> <a name="pipelineDescription" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDescription"></a>

```java
public java.lang.String getPipelineDescription();
```

- *Type:* java.lang.String

---

##### `pipelineDisplayName`<sup>Required</sup> <a name="pipelineDisplayName" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDisplayName"></a>

```java
public java.lang.String getPipelineDisplayName();
```

- *Type:* java.lang.String

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineName"></a>

```java
public java.lang.String getPipelineName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerPipelineConfig <a name="SagemakerPipelineConfig" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_pipeline.SagemakerPipelineConfig;

SagemakerPipelineConfig.builder()
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
    .pipelineDisplayName(java.lang.String)
    .pipelineName(java.lang.String)
//  .id(java.lang.String)
//  .parallelismConfiguration(SagemakerPipelineParallelismConfiguration)
//  .pipelineDefinition(java.lang.String)
//  .pipelineDefinitionS3Location(SagemakerPipelinePipelineDefinitionS3Location)
//  .pipelineDescription(java.lang.String)
//  .roleArn(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDisplayName">pipelineDisplayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_display_name SagemakerPipeline#pipeline_display_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineName">pipelineName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_name SagemakerPipeline#pipeline_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#id SagemakerPipeline#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.parallelismConfiguration">parallelismConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a></code> | parallelism_configuration block. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDefinition">pipelineDefinition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_definition SagemakerPipeline#pipeline_definition}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDefinitionS3Location">pipelineDefinitionS3Location</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a></code> | pipeline_definition_s3_location block. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDescription">pipelineDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_description SagemakerPipeline#pipeline_description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#role_arn SagemakerPipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#tags SagemakerPipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#tags_all SagemakerPipeline#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pipelineDisplayName`<sup>Required</sup> <a name="pipelineDisplayName" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDisplayName"></a>

```java
public java.lang.String getPipelineDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_display_name SagemakerPipeline#pipeline_display_name}.

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineName"></a>

```java
public java.lang.String getPipelineName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_name SagemakerPipeline#pipeline_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#id SagemakerPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parallelismConfiguration`<sup>Optional</sup> <a name="parallelismConfiguration" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.parallelismConfiguration"></a>

```java
public SagemakerPipelineParallelismConfiguration getParallelismConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a>

parallelism_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#parallelism_configuration SagemakerPipeline#parallelism_configuration}

---

##### `pipelineDefinition`<sup>Optional</sup> <a name="pipelineDefinition" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDefinition"></a>

```java
public java.lang.String getPipelineDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_definition SagemakerPipeline#pipeline_definition}.

---

##### `pipelineDefinitionS3Location`<sup>Optional</sup> <a name="pipelineDefinitionS3Location" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDefinitionS3Location"></a>

```java
public SagemakerPipelinePipelineDefinitionS3Location getPipelineDefinitionS3Location();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a>

pipeline_definition_s3_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_definition_s3_location SagemakerPipeline#pipeline_definition_s3_location}

---

##### `pipelineDescription`<sup>Optional</sup> <a name="pipelineDescription" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDescription"></a>

```java
public java.lang.String getPipelineDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#pipeline_description SagemakerPipeline#pipeline_description}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#role_arn SagemakerPipeline#role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#tags SagemakerPipeline#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#tags_all SagemakerPipeline#tags_all}.

---

### SagemakerPipelineParallelismConfiguration <a name="SagemakerPipelineParallelismConfiguration" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_pipeline.SagemakerPipelineParallelismConfiguration;

SagemakerPipelineParallelismConfiguration.builder()
    .maxParallelExecutionSteps(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration.property.maxParallelExecutionSteps">maxParallelExecutionSteps</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#max_parallel_execution_steps SagemakerPipeline#max_parallel_execution_steps}. |

---

##### `maxParallelExecutionSteps`<sup>Required</sup> <a name="maxParallelExecutionSteps" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration.property.maxParallelExecutionSteps"></a>

```java
public java.lang.Number getMaxParallelExecutionSteps();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#max_parallel_execution_steps SagemakerPipeline#max_parallel_execution_steps}.

---

### SagemakerPipelinePipelineDefinitionS3Location <a name="SagemakerPipelinePipelineDefinitionS3Location" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_pipeline.SagemakerPipelinePipelineDefinitionS3Location;

SagemakerPipelinePipelineDefinitionS3Location.builder()
    .bucket(java.lang.String)
    .objectKey(java.lang.String)
//  .versionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#bucket SagemakerPipeline#bucket}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.objectKey">objectKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#object_key SagemakerPipeline#object_key}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.versionId">versionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#version_id SagemakerPipeline#version_id}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#bucket SagemakerPipeline#bucket}.

---

##### `objectKey`<sup>Required</sup> <a name="objectKey" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.objectKey"></a>

```java
public java.lang.String getObjectKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#object_key SagemakerPipeline#object_key}.

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.11.0/docs/resources/sagemaker_pipeline#version_id SagemakerPipeline#version_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerPipelineParallelismConfigurationOutputReference <a name="SagemakerPipelineParallelismConfigurationOutputReference" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_pipeline.SagemakerPipelineParallelismConfigurationOutputReference;

new SagemakerPipelineParallelismConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.maxParallelExecutionStepsInput">maxParallelExecutionStepsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.maxParallelExecutionSteps">maxParallelExecutionSteps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxParallelExecutionStepsInput`<sup>Optional</sup> <a name="maxParallelExecutionStepsInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.maxParallelExecutionStepsInput"></a>

```java
public java.lang.Number getMaxParallelExecutionStepsInput();
```

- *Type:* java.lang.Number

---

##### `maxParallelExecutionSteps`<sup>Required</sup> <a name="maxParallelExecutionSteps" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.maxParallelExecutionSteps"></a>

```java
public java.lang.Number getMaxParallelExecutionSteps();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.internalValue"></a>

```java
public SagemakerPipelineParallelismConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a>

---


### SagemakerPipelinePipelineDefinitionS3LocationOutputReference <a name="SagemakerPipelinePipelineDefinitionS3LocationOutputReference" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_pipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference;

new SagemakerPipelinePipelineDefinitionS3LocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersionId` <a name="resetVersionId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.resetVersionId"></a>

```java
public void resetVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.objectKeyInput">objectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.versionIdInput">versionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.objectKey">objectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `objectKeyInput`<sup>Optional</sup> <a name="objectKeyInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.objectKeyInput"></a>

```java
public java.lang.String getObjectKeyInput();
```

- *Type:* java.lang.String

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.versionIdInput"></a>

```java
public java.lang.String getVersionIdInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `objectKey`<sup>Required</sup> <a name="objectKey" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.objectKey"></a>

```java
public java.lang.String getObjectKey();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.internalValue"></a>

```java
public SagemakerPipelinePipelineDefinitionS3Location getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a>

---



