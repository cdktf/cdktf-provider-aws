# `s3BucketAcl` Submodule <a name="`s3BucketAcl` Submodule" id="@cdktf/provider-aws.s3BucketAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketAcl <a name="S3BucketAcl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl aws_s3_bucket_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_acl.S3BucketAcl;

S3BucketAcl.Builder.create(Construct scope, java.lang.String id)
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
//  .accessControlPolicy(S3BucketAclAccessControlPolicy)
//  .acl(java.lang.String)
//  .expectedBucketOwner(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#bucket S3BucketAcl#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.accessControlPolicy">accessControlPolicy</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a></code> | access_control_policy block. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.acl">acl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#acl S3BucketAcl#acl}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#expected_bucket_owner S3BucketAcl#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#bucket S3BucketAcl#bucket}.

---

##### `accessControlPolicy`<sup>Optional</sup> <a name="accessControlPolicy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.accessControlPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a>

access_control_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#access_control_policy S3BucketAcl#access_control_policy}

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.acl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#acl S3BucketAcl#acl}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.expectedBucketOwner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#expected_bucket_owner S3BucketAcl#expected_bucket_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.putAccessControlPolicy">putAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetAccessControlPolicy">resetAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAccessControlPolicy` <a name="putAccessControlPolicy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.putAccessControlPolicy"></a>

```java
public void putAccessControlPolicy(S3BucketAclAccessControlPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.putAccessControlPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a>

---

##### `resetAccessControlPolicy` <a name="resetAccessControlPolicy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetAccessControlPolicy"></a>

```java
public void resetAccessControlPolicy()
```

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetAcl"></a>

```java
public void resetAcl()
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetExpectedBucketOwner"></a>

```java
public void resetExpectedBucketOwner()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_acl.S3BucketAcl;

S3BucketAcl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_acl.S3BucketAcl;

S3BucketAcl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_acl.S3BucketAcl;

S3BucketAcl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.accessControlPolicy">accessControlPolicy</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference">S3BucketAclAccessControlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.accessControlPolicyInput">accessControlPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.aclInput">aclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.acl">acl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessControlPolicy`<sup>Required</sup> <a name="accessControlPolicy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.accessControlPolicy"></a>

```java
public S3BucketAclAccessControlPolicyOutputReference getAccessControlPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference">S3BucketAclAccessControlPolicyOutputReference</a>

---

##### `accessControlPolicyInput`<sup>Optional</sup> <a name="accessControlPolicyInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.accessControlPolicyInput"></a>

```java
public S3BucketAclAccessControlPolicy getAccessControlPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a>

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.aclInput"></a>

```java
public java.lang.String getAclInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.expectedBucketOwnerInput"></a>

```java
public java.lang.String getExpectedBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketAclAccessControlPolicy <a name="S3BucketAclAccessControlPolicy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_acl.S3BucketAclAccessControlPolicy;

S3BucketAclAccessControlPolicy.builder()
    .owner(S3BucketAclAccessControlPolicyOwner)
//  .grant(IResolvable)
//  .grant(java.util.List<S3BucketAclAccessControlPolicyGrant>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.property.owner">owner</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a></code> | owner block. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.property.grant">grant</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>></code> | grant block. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.property.owner"></a>

```java
public S3BucketAclAccessControlPolicyOwner getOwner();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a>

owner block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#owner S3BucketAcl#owner}

---

##### `grant`<sup>Optional</sup> <a name="grant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.property.grant"></a>

```java
public java.lang.Object getGrant();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>>

grant block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#grant S3BucketAcl#grant}

---

### S3BucketAclAccessControlPolicyGrant <a name="S3BucketAclAccessControlPolicyGrant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_acl.S3BucketAclAccessControlPolicyGrant;

S3BucketAclAccessControlPolicyGrant.builder()
    .permission(java.lang.String)
//  .grantee(S3BucketAclAccessControlPolicyGrantGrantee)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#permission S3BucketAcl#permission}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.property.grantee">grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a></code> | grantee block. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#permission S3BucketAcl#permission}.

---

##### `grantee`<sup>Optional</sup> <a name="grantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.property.grantee"></a>

```java
public S3BucketAclAccessControlPolicyGrantGrantee getGrantee();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a>

grantee block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#grantee S3BucketAcl#grantee}

---

### S3BucketAclAccessControlPolicyGrantGrantee <a name="S3BucketAclAccessControlPolicyGrantGrantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_acl.S3BucketAclAccessControlPolicyGrantGrantee;

S3BucketAclAccessControlPolicyGrantGrantee.builder()
    .type(java.lang.String)
//  .emailAddress(java.lang.String)
//  .id(java.lang.String)
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#type S3BucketAcl#type}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#email_address S3BucketAcl#email_address}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#uri S3BucketAcl#uri}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#type S3BucketAcl#type}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#email_address S3BucketAcl#email_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#uri S3BucketAcl#uri}.

---

### S3BucketAclAccessControlPolicyOwner <a name="S3BucketAclAccessControlPolicyOwner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_acl.S3BucketAclAccessControlPolicyOwner;

S3BucketAclAccessControlPolicyOwner.builder()
    .id(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#display_name S3BucketAcl#display_name}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#display_name S3BucketAcl#display_name}.

---

### S3BucketAclConfig <a name="S3BucketAclConfig" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_acl.S3BucketAclConfig;

S3BucketAclConfig.builder()
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
//  .accessControlPolicy(S3BucketAclAccessControlPolicy)
//  .acl(java.lang.String)
//  .expectedBucketOwner(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#bucket S3BucketAcl#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.accessControlPolicy">accessControlPolicy</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a></code> | access_control_policy block. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.acl">acl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#acl S3BucketAcl#acl}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#expected_bucket_owner S3BucketAcl#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#bucket S3BucketAcl#bucket}.

---

##### `accessControlPolicy`<sup>Optional</sup> <a name="accessControlPolicy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.accessControlPolicy"></a>

```java
public S3BucketAclAccessControlPolicy getAccessControlPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a>

access_control_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#access_control_policy S3BucketAcl#access_control_policy}

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#acl S3BucketAcl#acl}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#expected_bucket_owner S3BucketAcl#expected_bucket_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketAclAccessControlPolicyGrantGranteeOutputReference <a name="S3BucketAclAccessControlPolicyGrantGranteeOutputReference" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_acl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference;

new S3BucketAclAccessControlPolicyGrantGranteeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetEmailAddress"></a>

```java
public void resetEmailAddress()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.emailAddressInput"></a>

```java
public java.lang.String getEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.internalValue"></a>

```java
public S3BucketAclAccessControlPolicyGrantGrantee getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a>

---


### S3BucketAclAccessControlPolicyGrantList <a name="S3BucketAclAccessControlPolicyGrantList" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_acl.S3BucketAclAccessControlPolicyGrantList;

new S3BucketAclAccessControlPolicyGrantList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.get"></a>

```java
public S3BucketAclAccessControlPolicyGrantOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>>

---


### S3BucketAclAccessControlPolicyGrantOutputReference <a name="S3BucketAclAccessControlPolicyGrantOutputReference" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_acl.S3BucketAclAccessControlPolicyGrantOutputReference;

new S3BucketAclAccessControlPolicyGrantOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.putGrantee">putGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resetGrantee">resetGrantee</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrantee` <a name="putGrantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.putGrantee"></a>

```java
public void putGrantee(S3BucketAclAccessControlPolicyGrantGrantee value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.putGrantee.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a>

---

##### `resetGrantee` <a name="resetGrantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resetGrantee"></a>

```java
public void resetGrantee()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.grantee">grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference">S3BucketAclAccessControlPolicyGrantGranteeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.granteeInput">granteeInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.grantee"></a>

```java
public S3BucketAclAccessControlPolicyGrantGranteeOutputReference getGrantee();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference">S3BucketAclAccessControlPolicyGrantGranteeOutputReference</a>

---

##### `granteeInput`<sup>Optional</sup> <a name="granteeInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.granteeInput"></a>

```java
public S3BucketAclAccessControlPolicyGrantGrantee getGranteeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a>

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a> OR com.hashicorp.cdktf.IResolvable

---


### S3BucketAclAccessControlPolicyOutputReference <a name="S3BucketAclAccessControlPolicyOutputReference" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_acl.S3BucketAclAccessControlPolicyOutputReference;

new S3BucketAclAccessControlPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putGrant">putGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putOwner">putOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resetGrant">resetGrant</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrant` <a name="putGrant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putGrant"></a>

```java
public void putGrant(IResolvable OR java.util.List<S3BucketAclAccessControlPolicyGrant> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putGrant.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>>

---

##### `putOwner` <a name="putOwner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putOwner"></a>

```java
public void putOwner(S3BucketAclAccessControlPolicyOwner value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putOwner.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a>

---

##### `resetGrant` <a name="resetGrant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resetGrant"></a>

```java
public void resetGrant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.grant">grant</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList">S3BucketAclAccessControlPolicyGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.owner">owner</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference">S3BucketAclAccessControlPolicyOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.grantInput">grantInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.ownerInput">ownerInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grant`<sup>Required</sup> <a name="grant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.grant"></a>

```java
public S3BucketAclAccessControlPolicyGrantList getGrant();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList">S3BucketAclAccessControlPolicyGrantList</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.owner"></a>

```java
public S3BucketAclAccessControlPolicyOwnerOutputReference getOwner();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference">S3BucketAclAccessControlPolicyOwnerOutputReference</a>

---

##### `grantInput`<sup>Optional</sup> <a name="grantInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.grantInput"></a>

```java
public java.lang.Object getGrantInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>>

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.ownerInput"></a>

```java
public S3BucketAclAccessControlPolicyOwner getOwnerInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.internalValue"></a>

```java
public S3BucketAclAccessControlPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a>

---


### S3BucketAclAccessControlPolicyOwnerOutputReference <a name="S3BucketAclAccessControlPolicyOwnerOutputReference" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_acl.S3BucketAclAccessControlPolicyOwnerOutputReference;

new S3BucketAclAccessControlPolicyOwnerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.internalValue"></a>

```java
public S3BucketAclAccessControlPolicyOwner getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a>

---



