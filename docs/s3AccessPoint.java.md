# `s3AccessPoint` Submodule <a name="`s3AccessPoint` Submodule" id="@cdktf/provider-aws.s3AccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3AccessPoint <a name="S3AccessPoint" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point aws_s3_access_point}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_access_point.S3AccessPoint;

S3AccessPoint.Builder.create(Construct scope, java.lang.String id)
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
    .bucket(java.lang.String)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .bucketAccountId(java.lang.String)
//  .id(java.lang.String)
//  .policy(java.lang.String)
//  .publicAccessBlockConfiguration(S3AccessPointPublicAccessBlockConfiguration)
//  .vpcConfiguration(S3AccessPointVpcConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket S3AccessPoint#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#name S3AccessPoint#name}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#account_id S3AccessPoint#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.bucketAccountId">bucketAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket_account_id S3AccessPoint#bucket_account_id}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#id S3AccessPoint#id}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#policy S3AccessPoint#policy}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.publicAccessBlockConfiguration">publicAccessBlockConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a></code> | public_access_block_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a></code> | vpc_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket S3AccessPoint#bucket}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#name S3AccessPoint#name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#account_id S3AccessPoint#account_id}.

---

##### `bucketAccountId`<sup>Optional</sup> <a name="bucketAccountId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.bucketAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket_account_id S3AccessPoint#bucket_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#id S3AccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.policy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#policy S3AccessPoint#policy}.

---

##### `publicAccessBlockConfiguration`<sup>Optional</sup> <a name="publicAccessBlockConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.publicAccessBlockConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a>

public_access_block_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#public_access_block_configuration S3AccessPoint#public_access_block_configuration}

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#vpc_configuration S3AccessPoint#vpc_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putPublicAccessBlockConfiguration">putPublicAccessBlockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putVpcConfiguration">putVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetBucketAccountId">resetBucketAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetPublicAccessBlockConfiguration">resetPublicAccessBlockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetVpcConfiguration">resetVpcConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPublicAccessBlockConfiguration` <a name="putPublicAccessBlockConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putPublicAccessBlockConfiguration"></a>

```java
public void putPublicAccessBlockConfiguration(S3AccessPointPublicAccessBlockConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putPublicAccessBlockConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a>

---

##### `putVpcConfiguration` <a name="putVpcConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putVpcConfiguration"></a>

```java
public void putVpcConfiguration(S3AccessPointVpcConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetBucketAccountId` <a name="resetBucketAccountId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetBucketAccountId"></a>

```java
public void resetBucketAccountId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetId"></a>

```java
public void resetId()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetPolicy"></a>

```java
public void resetPolicy()
```

##### `resetPublicAccessBlockConfiguration` <a name="resetPublicAccessBlockConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetPublicAccessBlockConfiguration"></a>

```java
public void resetPublicAccessBlockConfiguration()
```

##### `resetVpcConfiguration` <a name="resetVpcConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetVpcConfiguration"></a>

```java
public void resetVpcConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_access_point.S3AccessPoint;

S3AccessPoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_access_point.S3AccessPoint;

S3AccessPoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_access_point.S3AccessPoint;

S3AccessPoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.endpoints">endpoints</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.hasPublicAccessPolicy">hasPublicAccessPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.networkOrigin">networkOrigin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.publicAccessBlockConfiguration">publicAccessBlockConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference">S3AccessPointPublicAccessBlockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference">S3AccessPointVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketAccountIdInput">bucketAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.publicAccessBlockConfigurationInput">publicAccessBlockConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.vpcConfigurationInput">vpcConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketAccountId">bucketAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.endpoints"></a>

```java
public StringMap getEndpoints();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `hasPublicAccessPolicy`<sup>Required</sup> <a name="hasPublicAccessPolicy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.hasPublicAccessPolicy"></a>

```java
public IResolvable getHasPublicAccessPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `networkOrigin`<sup>Required</sup> <a name="networkOrigin" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.networkOrigin"></a>

```java
public java.lang.String getNetworkOrigin();
```

- *Type:* java.lang.String

---

##### `publicAccessBlockConfiguration`<sup>Required</sup> <a name="publicAccessBlockConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.publicAccessBlockConfiguration"></a>

```java
public S3AccessPointPublicAccessBlockConfigurationOutputReference getPublicAccessBlockConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference">S3AccessPointPublicAccessBlockConfigurationOutputReference</a>

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.vpcConfiguration"></a>

```java
public S3AccessPointVpcConfigurationOutputReference getVpcConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference">S3AccessPointVpcConfigurationOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `bucketAccountIdInput`<sup>Optional</sup> <a name="bucketAccountIdInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketAccountIdInput"></a>

```java
public java.lang.String getBucketAccountIdInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `publicAccessBlockConfigurationInput`<sup>Optional</sup> <a name="publicAccessBlockConfigurationInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.publicAccessBlockConfigurationInput"></a>

```java
public S3AccessPointPublicAccessBlockConfiguration getPublicAccessBlockConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a>

---

##### `vpcConfigurationInput`<sup>Optional</sup> <a name="vpcConfigurationInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.vpcConfigurationInput"></a>

```java
public S3AccessPointVpcConfiguration getVpcConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketAccountId`<sup>Required</sup> <a name="bucketAccountId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketAccountId"></a>

```java
public java.lang.String getBucketAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3AccessPointConfig <a name="S3AccessPointConfig" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_access_point.S3AccessPointConfig;

S3AccessPointConfig.builder()
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
    .bucket(java.lang.String)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .bucketAccountId(java.lang.String)
//  .id(java.lang.String)
//  .policy(java.lang.String)
//  .publicAccessBlockConfiguration(S3AccessPointPublicAccessBlockConfiguration)
//  .vpcConfiguration(S3AccessPointVpcConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket S3AccessPoint#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#name S3AccessPoint#name}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#account_id S3AccessPoint#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.bucketAccountId">bucketAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket_account_id S3AccessPoint#bucket_account_id}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#id S3AccessPoint#id}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#policy S3AccessPoint#policy}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.publicAccessBlockConfiguration">publicAccessBlockConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a></code> | public_access_block_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a></code> | vpc_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket S3AccessPoint#bucket}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#name S3AccessPoint#name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#account_id S3AccessPoint#account_id}.

---

##### `bucketAccountId`<sup>Optional</sup> <a name="bucketAccountId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.bucketAccountId"></a>

```java
public java.lang.String getBucketAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket_account_id S3AccessPoint#bucket_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#id S3AccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#policy S3AccessPoint#policy}.

---

##### `publicAccessBlockConfiguration`<sup>Optional</sup> <a name="publicAccessBlockConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.publicAccessBlockConfiguration"></a>

```java
public S3AccessPointPublicAccessBlockConfiguration getPublicAccessBlockConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a>

public_access_block_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#public_access_block_configuration S3AccessPoint#public_access_block_configuration}

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.vpcConfiguration"></a>

```java
public S3AccessPointVpcConfiguration getVpcConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#vpc_configuration S3AccessPoint#vpc_configuration}

---

### S3AccessPointPublicAccessBlockConfiguration <a name="S3AccessPointPublicAccessBlockConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_access_point.S3AccessPointPublicAccessBlockConfiguration;

S3AccessPointPublicAccessBlockConfiguration.builder()
//  .blockPublicAcls(java.lang.Boolean)
//  .blockPublicAcls(IResolvable)
//  .blockPublicPolicy(java.lang.Boolean)
//  .blockPublicPolicy(IResolvable)
//  .ignorePublicAcls(java.lang.Boolean)
//  .ignorePublicAcls(IResolvable)
//  .restrictPublicBuckets(java.lang.Boolean)
//  .restrictPublicBuckets(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.blockPublicAcls">blockPublicAcls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#block_public_acls S3AccessPoint#block_public_acls}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#block_public_policy S3AccessPoint#block_public_policy}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.ignorePublicAcls">ignorePublicAcls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#ignore_public_acls S3AccessPoint#ignore_public_acls}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.restrictPublicBuckets">restrictPublicBuckets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#restrict_public_buckets S3AccessPoint#restrict_public_buckets}. |

---

##### `blockPublicAcls`<sup>Optional</sup> <a name="blockPublicAcls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.blockPublicAcls"></a>

```java
public java.lang.Object getBlockPublicAcls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#block_public_acls S3AccessPoint#block_public_acls}.

---

##### `blockPublicPolicy`<sup>Optional</sup> <a name="blockPublicPolicy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.blockPublicPolicy"></a>

```java
public java.lang.Object getBlockPublicPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#block_public_policy S3AccessPoint#block_public_policy}.

---

##### `ignorePublicAcls`<sup>Optional</sup> <a name="ignorePublicAcls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.ignorePublicAcls"></a>

```java
public java.lang.Object getIgnorePublicAcls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#ignore_public_acls S3AccessPoint#ignore_public_acls}.

---

##### `restrictPublicBuckets`<sup>Optional</sup> <a name="restrictPublicBuckets" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.restrictPublicBuckets"></a>

```java
public java.lang.Object getRestrictPublicBuckets();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#restrict_public_buckets S3AccessPoint#restrict_public_buckets}.

---

### S3AccessPointVpcConfiguration <a name="S3AccessPointVpcConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_access_point.S3AccessPointVpcConfiguration;

S3AccessPointVpcConfiguration.builder()
    .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#vpc_id S3AccessPoint#vpc_id}. |

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#vpc_id S3AccessPoint#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3AccessPointPublicAccessBlockConfigurationOutputReference <a name="S3AccessPointPublicAccessBlockConfigurationOutputReference" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_access_point.S3AccessPointPublicAccessBlockConfigurationOutputReference;

new S3AccessPointPublicAccessBlockConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicAcls">resetBlockPublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicPolicy">resetBlockPublicPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetIgnorePublicAcls">resetIgnorePublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetRestrictPublicBuckets">resetRestrictPublicBuckets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBlockPublicAcls` <a name="resetBlockPublicAcls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicAcls"></a>

```java
public void resetBlockPublicAcls()
```

##### `resetBlockPublicPolicy` <a name="resetBlockPublicPolicy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicPolicy"></a>

```java
public void resetBlockPublicPolicy()
```

##### `resetIgnorePublicAcls` <a name="resetIgnorePublicAcls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetIgnorePublicAcls"></a>

```java
public void resetIgnorePublicAcls()
```

##### `resetRestrictPublicBuckets` <a name="resetRestrictPublicBuckets" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetRestrictPublicBuckets"></a>

```java
public void resetRestrictPublicBuckets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAclsInput">blockPublicAclsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicyInput">blockPublicPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAclsInput">ignorePublicAclsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBucketsInput">restrictPublicBucketsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls">blockPublicAcls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls">ignorePublicAcls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets">restrictPublicBuckets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blockPublicAclsInput`<sup>Optional</sup> <a name="blockPublicAclsInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAclsInput"></a>

```java
public java.lang.Object getBlockPublicAclsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockPublicPolicyInput`<sup>Optional</sup> <a name="blockPublicPolicyInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicyInput"></a>

```java
public java.lang.Object getBlockPublicPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignorePublicAclsInput`<sup>Optional</sup> <a name="ignorePublicAclsInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAclsInput"></a>

```java
public java.lang.Object getIgnorePublicAclsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restrictPublicBucketsInput`<sup>Optional</sup> <a name="restrictPublicBucketsInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBucketsInput"></a>

```java
public java.lang.Object getRestrictPublicBucketsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockPublicAcls`<sup>Required</sup> <a name="blockPublicAcls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls"></a>

```java
public java.lang.Object getBlockPublicAcls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockPublicPolicy`<sup>Required</sup> <a name="blockPublicPolicy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy"></a>

```java
public java.lang.Object getBlockPublicPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignorePublicAcls`<sup>Required</sup> <a name="ignorePublicAcls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls"></a>

```java
public java.lang.Object getIgnorePublicAcls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restrictPublicBuckets`<sup>Required</sup> <a name="restrictPublicBuckets" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets"></a>

```java
public java.lang.Object getRestrictPublicBuckets();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue"></a>

```java
public S3AccessPointPublicAccessBlockConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a>

---


### S3AccessPointVpcConfigurationOutputReference <a name="S3AccessPointVpcConfigurationOutputReference" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_access_point.S3AccessPointVpcConfigurationOutputReference;

new S3AccessPointVpcConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.internalValue"></a>

```java
public S3AccessPointVpcConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a>

---



