# `dataAwsDatapipelinePipelineDefinition` Submodule <a name="`dataAwsDatapipelinePipelineDefinition` Submodule" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDatapipelinePipelineDefinition <a name="DataAwsDatapipelinePipelineDefinition" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinition;

DataAwsDatapipelinePipelineDefinition.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .parameterValue(IResolvable)
//  .parameterValue(java.util.List<DataAwsDatapipelinePipelineDefinitionParameterValue>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#pipeline_id DataAwsDatapipelinePipelineDefinition#pipeline_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#id DataAwsDatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.parameterValue">parameterValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>></code> | parameter_value block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.pipelineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#pipeline_id DataAwsDatapipelinePipelineDefinition#pipeline_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#id DataAwsDatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.parameterValue"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>>

parameter_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#parameter_value DataAwsDatapipelinePipelineDefinition#parameter_value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.putParameterValue">putParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putParameterValue` <a name="putParameterValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.putParameterValue"></a>

```java
public void putParameterValue(IResolvable OR java.util.List<DataAwsDatapipelinePipelineDefinitionParameterValue> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.putParameterValue.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetId"></a>

```java
public void resetId()
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetParameterValue"></a>

```java
public void resetParameterValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinition;

DataAwsDatapipelinePipelineDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinition;

DataAwsDatapipelinePipelineDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinition;

DataAwsDatapipelinePipelineDefinition.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterObject">parameterObject</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList">DataAwsDatapipelinePipelineDefinitionParameterObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList">DataAwsDatapipelinePipelineDefinitionParameterValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineObject">pipelineObject</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList">DataAwsDatapipelinePipelineDefinitionPipelineObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterValueInput">parameterValueInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineIdInput">pipelineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `parameterObject`<sup>Required</sup> <a name="parameterObject" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterObject"></a>

```java
public DataAwsDatapipelinePipelineDefinitionParameterObjectList getParameterObject();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList">DataAwsDatapipelinePipelineDefinitionParameterObjectList</a>

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterValue"></a>

```java
public DataAwsDatapipelinePipelineDefinitionParameterValueList getParameterValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList">DataAwsDatapipelinePipelineDefinitionParameterValueList</a>

---

##### `pipelineObject`<sup>Required</sup> <a name="pipelineObject" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineObject"></a>

```java
public DataAwsDatapipelinePipelineDefinitionPipelineObjectList getPipelineObject();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList">DataAwsDatapipelinePipelineDefinitionPipelineObjectList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterValueInput"></a>

```java
public java.lang.Object getParameterValueInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>>

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineIdInput"></a>

```java
public java.lang.String getPipelineIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDatapipelinePipelineDefinitionConfig <a name="DataAwsDatapipelinePipelineDefinitionConfig" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinitionConfig;

DataAwsDatapipelinePipelineDefinitionConfig.builder()
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
//  .id(java.lang.String)
//  .parameterValue(IResolvable)
//  .parameterValue(java.util.List<DataAwsDatapipelinePipelineDefinitionParameterValue>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#pipeline_id DataAwsDatapipelinePipelineDefinition#pipeline_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#id DataAwsDatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.parameterValue">parameterValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>></code> | parameter_value block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#pipeline_id DataAwsDatapipelinePipelineDefinition#pipeline_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#id DataAwsDatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.parameterValue"></a>

```java
public java.lang.Object getParameterValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>>

parameter_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#parameter_value DataAwsDatapipelinePipelineDefinition#parameter_value}

---

### DataAwsDatapipelinePipelineDefinitionParameterObject <a name="DataAwsDatapipelinePipelineDefinitionParameterObject" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinitionParameterObject;

DataAwsDatapipelinePipelineDefinitionParameterObject.builder()
    .build();
```


### DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute;

DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute.builder()
    .build();
```


### DataAwsDatapipelinePipelineDefinitionParameterValue <a name="DataAwsDatapipelinePipelineDefinitionParameterValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinitionParameterValue;

DataAwsDatapipelinePipelineDefinitionParameterValue.builder()
    .build();
```


### DataAwsDatapipelinePipelineDefinitionPipelineObject <a name="DataAwsDatapipelinePipelineDefinitionPipelineObject" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinitionPipelineObject;

DataAwsDatapipelinePipelineDefinitionPipelineObject.builder()
    .build();
```


### DataAwsDatapipelinePipelineDefinitionPipelineObjectField <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectField" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField;

DataAwsDatapipelinePipelineDefinitionPipelineObjectField.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList;

new DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.get"></a>

```java
public DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference;

new DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute">DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.internalValue"></a>

```java
public DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute">DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute</a>

---


### DataAwsDatapipelinePipelineDefinitionParameterObjectList <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinitionParameterObjectList;

new DataAwsDatapipelinePipelineDefinitionParameterObjectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.get"></a>

```java
public DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference;

new DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.attribute">attribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList">DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject">DataAwsDatapipelinePipelineDefinitionParameterObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.attribute"></a>

```java
public DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList getAttribute();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList">DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.internalValue"></a>

```java
public DataAwsDatapipelinePipelineDefinitionParameterObject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject">DataAwsDatapipelinePipelineDefinitionParameterObject</a>

---


### DataAwsDatapipelinePipelineDefinitionParameterValueList <a name="DataAwsDatapipelinePipelineDefinitionParameterValueList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinitionParameterValueList;

new DataAwsDatapipelinePipelineDefinitionParameterValueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.get"></a>

```java
public DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>>

---


### DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference <a name="DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference;

new DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList;

new DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.get"></a>

```java
public DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference;

new DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValue">refValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField">DataAwsDatapipelinePipelineDefinitionPipelineObjectField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `refValue`<sup>Required</sup> <a name="refValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValue"></a>

```java
public java.lang.String getRefValue();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.internalValue"></a>

```java
public DataAwsDatapipelinePipelineDefinitionPipelineObjectField getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField">DataAwsDatapipelinePipelineDefinitionPipelineObjectField</a>

---


### DataAwsDatapipelinePipelineDefinitionPipelineObjectList <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList;

new DataAwsDatapipelinePipelineDefinitionPipelineObjectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.get"></a>

```java
public DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datapipeline_pipeline_definition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference;

new DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.field">field</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList">DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject">DataAwsDatapipelinePipelineDefinitionPipelineObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.field"></a>

```java
public DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList getField();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList">DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.internalValue"></a>

```java
public DataAwsDatapipelinePipelineDefinitionPipelineObject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject">DataAwsDatapipelinePipelineDefinitionPipelineObject</a>

---



