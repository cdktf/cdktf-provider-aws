# `dataAwsLambdaFunctionUrl` Submodule <a name="`dataAwsLambdaFunctionUrl` Submodule" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdaFunctionUrl <a name="DataAwsLambdaFunctionUrl" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url aws_lambda_function_url}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_function_url.DataAwsLambdaFunctionUrl;

DataAwsLambdaFunctionUrl.Builder.create(Construct scope, java.lang.String id)
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
    .functionName(java.lang.String)
//  .id(java.lang.String)
//  .qualifier(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#function_name DataAwsLambdaFunctionUrl#function_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#id DataAwsLambdaFunctionUrl#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.qualifier">qualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#qualifier DataAwsLambdaFunctionUrl#qualifier}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.functionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#function_name DataAwsLambdaFunctionUrl#function_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#id DataAwsLambdaFunctionUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.qualifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#qualifier DataAwsLambdaFunctionUrl#qualifier}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetQualifier">resetQualifier</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetId"></a>

```java
public void resetId()
```

##### `resetQualifier` <a name="resetQualifier" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetQualifier"></a>

```java
public void resetQualifier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_function_url.DataAwsLambdaFunctionUrl;

DataAwsLambdaFunctionUrl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_function_url.DataAwsLambdaFunctionUrl;

DataAwsLambdaFunctionUrl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_function_url.DataAwsLambdaFunctionUrl;

DataAwsLambdaFunctionUrl.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList">DataAwsLambdaFunctionUrlCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionArn">functionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionUrl">functionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.urlId">urlId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.qualifierInput">qualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.cors"></a>

```java
public DataAwsLambdaFunctionUrlCorsList getCors();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList">DataAwsLambdaFunctionUrlCorsList</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionArn"></a>

```java
public java.lang.String getFunctionArn();
```

- *Type:* java.lang.String

---

##### `functionUrl`<sup>Required</sup> <a name="functionUrl" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionUrl"></a>

```java
public java.lang.String getFunctionUrl();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `urlId`<sup>Required</sup> <a name="urlId" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.urlId"></a>

```java
public java.lang.String getUrlId();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.qualifierInput"></a>

```java
public java.lang.String getQualifierInput();
```

- *Type:* java.lang.String

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdaFunctionUrlConfig <a name="DataAwsLambdaFunctionUrlConfig" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_function_url.DataAwsLambdaFunctionUrlConfig;

DataAwsLambdaFunctionUrlConfig.builder()
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
    .functionName(java.lang.String)
//  .id(java.lang.String)
//  .qualifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#function_name DataAwsLambdaFunctionUrl#function_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#id DataAwsLambdaFunctionUrl#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#qualifier DataAwsLambdaFunctionUrl#qualifier}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#function_name DataAwsLambdaFunctionUrl#function_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#id DataAwsLambdaFunctionUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#qualifier DataAwsLambdaFunctionUrl#qualifier}.

---

### DataAwsLambdaFunctionUrlCors <a name="DataAwsLambdaFunctionUrlCors" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_function_url.DataAwsLambdaFunctionUrlCors;

DataAwsLambdaFunctionUrlCors.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLambdaFunctionUrlCorsList <a name="DataAwsLambdaFunctionUrlCorsList" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_function_url.DataAwsLambdaFunctionUrlCorsList;

new DataAwsLambdaFunctionUrlCorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.get"></a>

```java
public DataAwsLambdaFunctionUrlCorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLambdaFunctionUrlCorsOutputReference <a name="DataAwsLambdaFunctionUrlCorsOutputReference" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_function_url.DataAwsLambdaFunctionUrlCorsOutputReference;

new DataAwsLambdaFunctionUrlCorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowHeaders">allowHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowMethods">allowMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowOrigins">allowOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCors">DataAwsLambdaFunctionUrlCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowCredentials"></a>

```java
public IResolvable getAllowCredentials();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `allowHeaders`<sup>Required</sup> <a name="allowHeaders" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowMethods`<sup>Required</sup> <a name="allowMethods" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowMethods"></a>

```java
public java.util.List<java.lang.String> getAllowMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowOrigins`<sup>Required</sup> <a name="allowOrigins" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.exposeHeaders"></a>

```java
public java.util.List<java.lang.String> getExposeHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.internalValue"></a>

```java
public DataAwsLambdaFunctionUrlCors getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCors">DataAwsLambdaFunctionUrlCors</a>

---



