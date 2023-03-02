# `dataAwsLambdaLayerVersion` Submodule <a name="`dataAwsLambdaLayerVersion` Submodule" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdaLayerVersion <a name="DataAwsLambdaLayerVersion" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version aws_lambda_layer_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_layer_version.DataAwsLambdaLayerVersion;

DataAwsLambdaLayerVersion.Builder.create(Construct scope, java.lang.String id)
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
    .layerName(java.lang.String)
//  .compatibleArchitecture(java.lang.String)
//  .compatibleRuntime(java.lang.String)
//  .id(java.lang.String)
//  .version(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.layerName">layerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#layer_name DataAwsLambdaLayerVersion#layer_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.compatibleArchitecture">compatibleArchitecture</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.compatibleRuntime">compatibleRuntime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#id DataAwsLambdaLayerVersion#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.version">version</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#version DataAwsLambdaLayerVersion#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.layerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#layer_name DataAwsLambdaLayerVersion#layer_name}.

---

##### `compatibleArchitecture`<sup>Optional</sup> <a name="compatibleArchitecture" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.compatibleArchitecture"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}.

---

##### `compatibleRuntime`<sup>Optional</sup> <a name="compatibleRuntime" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.compatibleRuntime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#id DataAwsLambdaLayerVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.version"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#version DataAwsLambdaLayerVersion#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleArchitecture">resetCompatibleArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleRuntime">resetCompatibleRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCompatibleArchitecture` <a name="resetCompatibleArchitecture" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleArchitecture"></a>

```java
public void resetCompatibleArchitecture()
```

##### `resetCompatibleRuntime` <a name="resetCompatibleRuntime" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleRuntime"></a>

```java
public void resetCompatibleRuntime()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetId"></a>

```java
public void resetId()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_layer_version.DataAwsLambdaLayerVersion;

DataAwsLambdaLayerVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_layer_version.DataAwsLambdaLayerVersion;

DataAwsLambdaLayerVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_layer_version.DataAwsLambdaLayerVersion;

DataAwsLambdaLayerVersion.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectures">compatibleArchitectures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimes">compatibleRuntimes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerArn">layerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.licenseInfo">licenseInfo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingJobArn">signingJobArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingProfileVersionArn">signingProfileVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeHash">sourceCodeHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeSize">sourceCodeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectureInput">compatibleArchitectureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimeInput">compatibleRuntimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerNameInput">layerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.versionInput">versionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitecture">compatibleArchitecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntime">compatibleRuntime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerName">layerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `compatibleArchitectures`<sup>Required</sup> <a name="compatibleArchitectures" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectures"></a>

```java
public java.util.List<java.lang.String> getCompatibleArchitectures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compatibleRuntimes`<sup>Required</sup> <a name="compatibleRuntimes" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimes"></a>

```java
public java.util.List<java.lang.String> getCompatibleRuntimes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `layerArn`<sup>Required</sup> <a name="layerArn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerArn"></a>

```java
public java.lang.String getLayerArn();
```

- *Type:* java.lang.String

---

##### `licenseInfo`<sup>Required</sup> <a name="licenseInfo" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.licenseInfo"></a>

```java
public java.lang.String getLicenseInfo();
```

- *Type:* java.lang.String

---

##### `signingJobArn`<sup>Required</sup> <a name="signingJobArn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingJobArn"></a>

```java
public java.lang.String getSigningJobArn();
```

- *Type:* java.lang.String

---

##### `signingProfileVersionArn`<sup>Required</sup> <a name="signingProfileVersionArn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingProfileVersionArn"></a>

```java
public java.lang.String getSigningProfileVersionArn();
```

- *Type:* java.lang.String

---

##### `sourceCodeHash`<sup>Required</sup> <a name="sourceCodeHash" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeHash"></a>

```java
public java.lang.String getSourceCodeHash();
```

- *Type:* java.lang.String

---

##### `sourceCodeSize`<sup>Required</sup> <a name="sourceCodeSize" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeSize"></a>

```java
public java.lang.Number getSourceCodeSize();
```

- *Type:* java.lang.Number

---

##### `compatibleArchitectureInput`<sup>Optional</sup> <a name="compatibleArchitectureInput" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectureInput"></a>

```java
public java.lang.String getCompatibleArchitectureInput();
```

- *Type:* java.lang.String

---

##### `compatibleRuntimeInput`<sup>Optional</sup> <a name="compatibleRuntimeInput" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimeInput"></a>

```java
public java.lang.String getCompatibleRuntimeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `layerNameInput`<sup>Optional</sup> <a name="layerNameInput" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerNameInput"></a>

```java
public java.lang.String getLayerNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.versionInput"></a>

```java
public java.lang.Number getVersionInput();
```

- *Type:* java.lang.Number

---

##### `compatibleArchitecture`<sup>Required</sup> <a name="compatibleArchitecture" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitecture"></a>

```java
public java.lang.String getCompatibleArchitecture();
```

- *Type:* java.lang.String

---

##### `compatibleRuntime`<sup>Required</sup> <a name="compatibleRuntime" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntime"></a>

```java
public java.lang.String getCompatibleRuntime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerName"></a>

```java
public java.lang.String getLayerName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdaLayerVersionConfig <a name="DataAwsLambdaLayerVersionConfig" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_layer_version.DataAwsLambdaLayerVersionConfig;

DataAwsLambdaLayerVersionConfig.builder()
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
    .layerName(java.lang.String)
//  .compatibleArchitecture(java.lang.String)
//  .compatibleRuntime(java.lang.String)
//  .id(java.lang.String)
//  .version(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.layerName">layerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#layer_name DataAwsLambdaLayerVersion#layer_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleArchitecture">compatibleArchitecture</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleRuntime">compatibleRuntime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#id DataAwsLambdaLayerVersion#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.version">version</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#version DataAwsLambdaLayerVersion#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.layerName"></a>

```java
public java.lang.String getLayerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#layer_name DataAwsLambdaLayerVersion#layer_name}.

---

##### `compatibleArchitecture`<sup>Optional</sup> <a name="compatibleArchitecture" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleArchitecture"></a>

```java
public java.lang.String getCompatibleArchitecture();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}.

---

##### `compatibleRuntime`<sup>Optional</sup> <a name="compatibleRuntime" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleRuntime"></a>

```java
public java.lang.String getCompatibleRuntime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#id DataAwsLambdaLayerVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#version DataAwsLambdaLayerVersion#version}.

---



