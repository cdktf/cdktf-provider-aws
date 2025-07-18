# `dataAwsLambdaCodeSigningConfig` Submodule <a name="`dataAwsLambdaCodeSigningConfig` Submodule" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdaCodeSigningConfig <a name="DataAwsLambdaCodeSigningConfig" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_code_signing_config aws_lambda_code_signing_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_code_signing_config.DataAwsLambdaCodeSigningConfig;

DataAwsLambdaCodeSigningConfig.Builder.create(Construct scope, java.lang.String id)
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
    .arn(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_code_signing_config#arn DataAwsLambdaCodeSigningConfig#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_code_signing_config#id DataAwsLambdaCodeSigningConfig#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.arn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_code_signing_config#arn DataAwsLambdaCodeSigningConfig#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_code_signing_config#id DataAwsLambdaCodeSigningConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_code_signing_config#region DataAwsLambdaCodeSigningConfig#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsLambdaCodeSigningConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_code_signing_config.DataAwsLambdaCodeSigningConfig;

DataAwsLambdaCodeSigningConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_code_signing_config.DataAwsLambdaCodeSigningConfig;

DataAwsLambdaCodeSigningConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_code_signing_config.DataAwsLambdaCodeSigningConfig;

DataAwsLambdaCodeSigningConfig.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_code_signing_config.DataAwsLambdaCodeSigningConfig;

DataAwsLambdaCodeSigningConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsLambdaCodeSigningConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsLambdaCodeSigningConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsLambdaCodeSigningConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsLambdaCodeSigningConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_code_signing_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsLambdaCodeSigningConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.allowedPublishers">allowedPublishers</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList">DataAwsLambdaCodeSigningConfigAllowedPublishersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.configId">configId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList">DataAwsLambdaCodeSigningConfigPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `allowedPublishers`<sup>Required</sup> <a name="allowedPublishers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.allowedPublishers"></a>

```java
public DataAwsLambdaCodeSigningConfigAllowedPublishersList getAllowedPublishers();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList">DataAwsLambdaCodeSigningConfigAllowedPublishersList</a>

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.configId"></a>

```java
public java.lang.String getConfigId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.policies"></a>

```java
public DataAwsLambdaCodeSigningConfigPoliciesList getPolicies();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList">DataAwsLambdaCodeSigningConfigPoliciesList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdaCodeSigningConfigAllowedPublishers <a name="DataAwsLambdaCodeSigningConfigAllowedPublishers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_code_signing_config.DataAwsLambdaCodeSigningConfigAllowedPublishers;

DataAwsLambdaCodeSigningConfigAllowedPublishers.builder()
    .build();
```


### DataAwsLambdaCodeSigningConfigConfig <a name="DataAwsLambdaCodeSigningConfigConfig" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_code_signing_config.DataAwsLambdaCodeSigningConfigConfig;

DataAwsLambdaCodeSigningConfigConfig.builder()
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
    .arn(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_code_signing_config#arn DataAwsLambdaCodeSigningConfig#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_code_signing_config#id DataAwsLambdaCodeSigningConfig#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_code_signing_config#arn DataAwsLambdaCodeSigningConfig#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_code_signing_config#id DataAwsLambdaCodeSigningConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_code_signing_config#region DataAwsLambdaCodeSigningConfig#region}

---

### DataAwsLambdaCodeSigningConfigPolicies <a name="DataAwsLambdaCodeSigningConfigPolicies" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_code_signing_config.DataAwsLambdaCodeSigningConfigPolicies;

DataAwsLambdaCodeSigningConfigPolicies.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLambdaCodeSigningConfigAllowedPublishersList <a name="DataAwsLambdaCodeSigningConfigAllowedPublishersList" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_code_signing_config.DataAwsLambdaCodeSigningConfigAllowedPublishersList;

new DataAwsLambdaCodeSigningConfigAllowedPublishersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.get"></a>

```java
public DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference <a name="DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_code_signing_config.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference;

new DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns">signingProfileVersionArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers">DataAwsLambdaCodeSigningConfigAllowedPublishers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `signingProfileVersionArns`<sup>Required</sup> <a name="signingProfileVersionArns" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns"></a>

```java
public java.util.List<java.lang.String> getSigningProfileVersionArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue"></a>

```java
public DataAwsLambdaCodeSigningConfigAllowedPublishers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers">DataAwsLambdaCodeSigningConfigAllowedPublishers</a>

---


### DataAwsLambdaCodeSigningConfigPoliciesList <a name="DataAwsLambdaCodeSigningConfigPoliciesList" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_code_signing_config.DataAwsLambdaCodeSigningConfigPoliciesList;

new DataAwsLambdaCodeSigningConfigPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.get"></a>

```java
public DataAwsLambdaCodeSigningConfigPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLambdaCodeSigningConfigPoliciesOutputReference <a name="DataAwsLambdaCodeSigningConfigPoliciesOutputReference" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lambda_code_signing_config.DataAwsLambdaCodeSigningConfigPoliciesOutputReference;

new DataAwsLambdaCodeSigningConfigPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeployment">untrustedArtifactOnDeployment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies">DataAwsLambdaCodeSigningConfigPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `untrustedArtifactOnDeployment`<sup>Required</sup> <a name="untrustedArtifactOnDeployment" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeployment"></a>

```java
public java.lang.String getUntrustedArtifactOnDeployment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.internalValue"></a>

```java
public DataAwsLambdaCodeSigningConfigPolicies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies">DataAwsLambdaCodeSigningConfigPolicies</a>

---



