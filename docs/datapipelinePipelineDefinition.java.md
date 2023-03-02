# `datapipelinePipelineDefinition` Submodule <a name="`datapipelinePipelineDefinition` Submodule" id="@cdktf/provider-aws.datapipelinePipelineDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatapipelinePipelineDefinition <a name="DatapipelinePipelineDefinition" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinition;

DatapipelinePipelineDefinition.Builder.create(Construct scope, java.lang.String id)
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
    .pipelineId(java.lang.String)
    .pipelineObject(IResolvable)
    .pipelineObject(java.util.List<DatapipelinePipelineDefinitionPipelineObject>)
//  .id(java.lang.String)
//  .parameterObject(IResolvable)
//  .parameterObject(java.util.List<DatapipelinePipelineDefinitionParameterObject>)
//  .parameterValue(IResolvable)
//  .parameterValue(java.util.List<DatapipelinePipelineDefinitionParameterValue>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_id DatapipelinePipelineDefinition#pipeline_id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.pipelineObject">pipelineObject</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>></code> | pipeline_object block. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.parameterObject">parameterObject</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>></code> | parameter_object block. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.parameterValue">parameterValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>></code> | parameter_value block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.pipelineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_id DatapipelinePipelineDefinition#pipeline_id}.

---

##### `pipelineObject`<sup>Required</sup> <a name="pipelineObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.pipelineObject"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>>

pipeline_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_object DatapipelinePipelineDefinition#pipeline_object}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameterObject`<sup>Optional</sup> <a name="parameterObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.parameterObject"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>>

parameter_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#parameter_object DatapipelinePipelineDefinition#parameter_object}

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.parameterValue"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>>

parameter_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#parameter_value DatapipelinePipelineDefinition#parameter_value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterObject">putParameterObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterValue">putParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putPipelineObject">putPipelineObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetParameterObject">resetParameterObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putParameterObject` <a name="putParameterObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterObject"></a>

```java
public void putParameterObject(IResolvable OR java.util.List<DatapipelinePipelineDefinitionParameterObject> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterObject.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>>

---

##### `putParameterValue` <a name="putParameterValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterValue"></a>

```java
public void putParameterValue(IResolvable OR java.util.List<DatapipelinePipelineDefinitionParameterValue> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterValue.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>>

---

##### `putPipelineObject` <a name="putPipelineObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putPipelineObject"></a>

```java
public void putPipelineObject(IResolvable OR java.util.List<DatapipelinePipelineDefinitionPipelineObject> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putPipelineObject.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetId"></a>

```java
public void resetId()
```

##### `resetParameterObject` <a name="resetParameterObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetParameterObject"></a>

```java
public void resetParameterObject()
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetParameterValue"></a>

```java
public void resetParameterValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinition;

DatapipelinePipelineDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinition;

DatapipelinePipelineDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinition;

DatapipelinePipelineDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterObject">parameterObject</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList">DatapipelinePipelineDefinitionParameterObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList">DatapipelinePipelineDefinitionParameterValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineObject">pipelineObject</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList">DatapipelinePipelineDefinitionPipelineObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterObjectInput">parameterObjectInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterValueInput">parameterValueInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineIdInput">pipelineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineObjectInput">pipelineObjectInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `parameterObject`<sup>Required</sup> <a name="parameterObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterObject"></a>

```java
public DatapipelinePipelineDefinitionParameterObjectList getParameterObject();
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList">DatapipelinePipelineDefinitionParameterObjectList</a>

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterValue"></a>

```java
public DatapipelinePipelineDefinitionParameterValueList getParameterValue();
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList">DatapipelinePipelineDefinitionParameterValueList</a>

---

##### `pipelineObject`<sup>Required</sup> <a name="pipelineObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineObject"></a>

```java
public DatapipelinePipelineDefinitionPipelineObjectList getPipelineObject();
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList">DatapipelinePipelineDefinitionPipelineObjectList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parameterObjectInput`<sup>Optional</sup> <a name="parameterObjectInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterObjectInput"></a>

```java
public java.lang.Object getParameterObjectInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>>

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterValueInput"></a>

```java
public java.lang.Object getParameterValueInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>>

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineIdInput"></a>

```java
public java.lang.String getPipelineIdInput();
```

- *Type:* java.lang.String

---

##### `pipelineObjectInput`<sup>Optional</sup> <a name="pipelineObjectInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineObjectInput"></a>

```java
public java.lang.Object getPipelineObjectInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatapipelinePipelineDefinitionConfig <a name="DatapipelinePipelineDefinitionConfig" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinitionConfig;

DatapipelinePipelineDefinitionConfig.builder()
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
    .pipelineId(java.lang.String)
    .pipelineObject(IResolvable)
    .pipelineObject(java.util.List<DatapipelinePipelineDefinitionPipelineObject>)
//  .id(java.lang.String)
//  .parameterObject(IResolvable)
//  .parameterObject(java.util.List<DatapipelinePipelineDefinitionParameterObject>)
//  .parameterValue(IResolvable)
//  .parameterValue(java.util.List<DatapipelinePipelineDefinitionParameterValue>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_id DatapipelinePipelineDefinition#pipeline_id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.pipelineObject">pipelineObject</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>></code> | pipeline_object block. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.parameterObject">parameterObject</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>></code> | parameter_object block. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.parameterValue">parameterValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>></code> | parameter_value block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_id DatapipelinePipelineDefinition#pipeline_id}.

---

##### `pipelineObject`<sup>Required</sup> <a name="pipelineObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.pipelineObject"></a>

```java
public java.lang.Object getPipelineObject();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>>

pipeline_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_object DatapipelinePipelineDefinition#pipeline_object}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameterObject`<sup>Optional</sup> <a name="parameterObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.parameterObject"></a>

```java
public java.lang.Object getParameterObject();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>>

parameter_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#parameter_object DatapipelinePipelineDefinition#parameter_object}

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.parameterValue"></a>

```java
public java.lang.Object getParameterValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>>

parameter_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#parameter_value DatapipelinePipelineDefinition#parameter_value}

---

### DatapipelinePipelineDefinitionParameterObject <a name="DatapipelinePipelineDefinitionParameterObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinitionParameterObject;

DatapipelinePipelineDefinitionParameterObject.builder()
    .id(java.lang.String)
//  .attribute(IResolvable)
//  .attribute(java.util.List<DatapipelinePipelineDefinitionParameterObjectAttribute>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.property.attribute">attribute</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>></code> | attribute block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.property.attribute"></a>

```java
public java.lang.Object getAttribute();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>>

attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#attribute DatapipelinePipelineDefinition#attribute}

---

### DatapipelinePipelineDefinitionParameterObjectAttribute <a name="DatapipelinePipelineDefinitionParameterObjectAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinitionParameterObjectAttribute;

DatapipelinePipelineDefinitionParameterObjectAttribute.builder()
    .key(java.lang.String)
    .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}.

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}.

---

### DatapipelinePipelineDefinitionParameterValue <a name="DatapipelinePipelineDefinitionParameterValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinitionParameterValue;

DatapipelinePipelineDefinitionParameterValue.builder()
    .id(java.lang.String)
    .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}.

---

### DatapipelinePipelineDefinitionPipelineObject <a name="DatapipelinePipelineDefinitionPipelineObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinitionPipelineObject;

DatapipelinePipelineDefinitionPipelineObject.builder()
    .id(java.lang.String)
    .name(java.lang.String)
//  .field(IResolvable)
//  .field(java.util.List<DatapipelinePipelineDefinitionPipelineObjectField>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#name DatapipelinePipelineDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.field">field</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>></code> | field block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#name DatapipelinePipelineDefinition#name}.

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.field"></a>

```java
public java.lang.Object getField();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>>

field block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#field DatapipelinePipelineDefinition#field}

---

### DatapipelinePipelineDefinitionPipelineObjectField <a name="DatapipelinePipelineDefinitionPipelineObjectField" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinitionPipelineObjectField;

DatapipelinePipelineDefinitionPipelineObjectField.builder()
    .key(java.lang.String)
//  .refValue(java.lang.String)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.refValue">refValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#ref_value DatapipelinePipelineDefinition#ref_value}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}.

---

##### `refValue`<sup>Optional</sup> <a name="refValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.refValue"></a>

```java
public java.lang.String getRefValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#ref_value DatapipelinePipelineDefinition#ref_value}.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatapipelinePipelineDefinitionParameterObjectAttributeList <a name="DatapipelinePipelineDefinitionParameterObjectAttributeList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinitionParameterObjectAttributeList;

new DatapipelinePipelineDefinitionParameterObjectAttributeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.get"></a>

```java
public DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>>

---


### DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference <a name="DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference;

new DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a> OR com.hashicorp.cdktf.IResolvable

---


### DatapipelinePipelineDefinitionParameterObjectList <a name="DatapipelinePipelineDefinitionParameterObjectList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinitionParameterObjectList;

new DatapipelinePipelineDefinitionParameterObjectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.get"></a>

```java
public DatapipelinePipelineDefinitionParameterObjectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>>

---


### DatapipelinePipelineDefinitionParameterObjectOutputReference <a name="DatapipelinePipelineDefinitionParameterObjectOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinitionParameterObjectOutputReference;

new DatapipelinePipelineDefinitionParameterObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.putAttribute">putAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttribute` <a name="putAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.putAttribute"></a>

```java
public void putAttribute(IResolvable OR java.util.List<DatapipelinePipelineDefinitionParameterObjectAttribute> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.putAttribute.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>>

---

##### `resetAttribute` <a name="resetAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resetAttribute"></a>

```java
public void resetAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.attribute">attribute</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList">DatapipelinePipelineDefinitionParameterObjectAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.attributeInput">attributeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.attribute"></a>

```java
public DatapipelinePipelineDefinitionParameterObjectAttributeList getAttribute();
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList">DatapipelinePipelineDefinitionParameterObjectAttributeList</a>

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.attributeInput"></a>

```java
public java.lang.Object getAttributeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a> OR com.hashicorp.cdktf.IResolvable

---


### DatapipelinePipelineDefinitionParameterValueList <a name="DatapipelinePipelineDefinitionParameterValueList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinitionParameterValueList;

new DatapipelinePipelineDefinitionParameterValueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.get"></a>

```java
public DatapipelinePipelineDefinitionParameterValueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>>

---


### DatapipelinePipelineDefinitionParameterValueOutputReference <a name="DatapipelinePipelineDefinitionParameterValueOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinitionParameterValueOutputReference;

new DatapipelinePipelineDefinitionParameterValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a> OR com.hashicorp.cdktf.IResolvable

---


### DatapipelinePipelineDefinitionPipelineObjectFieldList <a name="DatapipelinePipelineDefinitionPipelineObjectFieldList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinitionPipelineObjectFieldList;

new DatapipelinePipelineDefinitionPipelineObjectFieldList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.get"></a>

```java
public DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>>

---


### DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference <a name="DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference;

new DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resetRefValue">resetRefValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRefValue` <a name="resetRefValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resetRefValue"></a>

```java
public void resetRefValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValueInput">refValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValue">refValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `refValueInput`<sup>Optional</sup> <a name="refValueInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValueInput"></a>

```java
public java.lang.String getRefValueInput();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `refValue`<sup>Required</sup> <a name="refValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValue"></a>

```java
public java.lang.String getRefValue();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a> OR com.hashicorp.cdktf.IResolvable

---


### DatapipelinePipelineDefinitionPipelineObjectList <a name="DatapipelinePipelineDefinitionPipelineObjectList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinitionPipelineObjectList;

new DatapipelinePipelineDefinitionPipelineObjectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.get"></a>

```java
public DatapipelinePipelineDefinitionPipelineObjectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>>

---


### DatapipelinePipelineDefinitionPipelineObjectOutputReference <a name="DatapipelinePipelineDefinitionPipelineObjectOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datapipeline_pipeline_definition.DatapipelinePipelineDefinitionPipelineObjectOutputReference;

new DatapipelinePipelineDefinitionPipelineObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.putField">putField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putField` <a name="putField" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.putField"></a>

```java
public void putField(IResolvable OR java.util.List<DatapipelinePipelineDefinitionPipelineObjectField> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.putField.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>>

---

##### `resetField` <a name="resetField" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resetField"></a>

```java
public void resetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.field">field</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList">DatapipelinePipelineDefinitionPipelineObjectFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fieldInput">fieldInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.field"></a>

```java
public DatapipelinePipelineDefinitionPipelineObjectFieldList getField();
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList">DatapipelinePipelineDefinitionPipelineObjectFieldList</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fieldInput"></a>

```java
public java.lang.Object getFieldInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a> OR com.hashicorp.cdktf.IResolvable

---



