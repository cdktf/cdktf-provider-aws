# `s3BucketLogging` Submodule <a name="`s3BucketLogging` Submodule" id="@cdktf/provider-aws.s3BucketLogging"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketLoggingA <a name="S3BucketLoggingA" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging aws_s3_bucket_logging}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_logging.S3BucketLoggingA;

S3BucketLoggingA.Builder.create(Construct scope, java.lang.String id)
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
    .bucket(java.lang.String)
    .targetBucket(java.lang.String)
    .targetPrefix(java.lang.String)
//  .expectedBucketOwner(java.lang.String)
//  .id(java.lang.String)
//  .targetGrant(IResolvable)
//  .targetGrant(java.util.List<S3BucketLoggingTargetGrant>)
//  .targetObjectKeyFormat(S3BucketLoggingTargetObjectKeyFormat)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#bucket S3BucketLoggingA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.targetBucket">targetBucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#target_bucket S3BucketLoggingA#target_bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.targetPrefix">targetPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#target_prefix S3BucketLoggingA#target_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#expected_bucket_owner S3BucketLoggingA#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.targetGrant">targetGrant</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>></code> | target_grant block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.targetObjectKeyFormat">targetObjectKeyFormat</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a></code> | target_object_key_format block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#bucket S3BucketLoggingA#bucket}.

---

##### `targetBucket`<sup>Required</sup> <a name="targetBucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.targetBucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#target_bucket S3BucketLoggingA#target_bucket}.

---

##### `targetPrefix`<sup>Required</sup> <a name="targetPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.targetPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#target_prefix S3BucketLoggingA#target_prefix}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.expectedBucketOwner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#expected_bucket_owner S3BucketLoggingA#expected_bucket_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `targetGrant`<sup>Optional</sup> <a name="targetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.targetGrant"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>>

target_grant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#target_grant S3BucketLoggingA#target_grant}

---

##### `targetObjectKeyFormat`<sup>Optional</sup> <a name="targetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.targetObjectKeyFormat"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a>

target_object_key_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#target_object_key_format S3BucketLoggingA#target_object_key_format}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetGrant">putTargetGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetObjectKeyFormat">putTargetObjectKeyFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetTargetGrant">resetTargetGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetTargetObjectKeyFormat">resetTargetObjectKeyFormat</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTargetGrant` <a name="putTargetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetGrant"></a>

```java
public void putTargetGrant(IResolvable OR java.util.List<S3BucketLoggingTargetGrant> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetGrant.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>>

---

##### `putTargetObjectKeyFormat` <a name="putTargetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetObjectKeyFormat"></a>

```java
public void putTargetObjectKeyFormat(S3BucketLoggingTargetObjectKeyFormat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetObjectKeyFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a>

---

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetExpectedBucketOwner"></a>

```java
public void resetExpectedBucketOwner()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetId"></a>

```java
public void resetId()
```

##### `resetTargetGrant` <a name="resetTargetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetTargetGrant"></a>

```java
public void resetTargetGrant()
```

##### `resetTargetObjectKeyFormat` <a name="resetTargetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetTargetObjectKeyFormat"></a>

```java
public void resetTargetObjectKeyFormat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3BucketLoggingA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_logging.S3BucketLoggingA;

S3BucketLoggingA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_logging.S3BucketLoggingA;

S3BucketLoggingA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_logging.S3BucketLoggingA;

S3BucketLoggingA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_logging.S3BucketLoggingA;

S3BucketLoggingA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3BucketLoggingA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a S3BucketLoggingA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3BucketLoggingA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3BucketLoggingA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the S3BucketLoggingA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetGrant">targetGrant</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList">S3BucketLoggingTargetGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetObjectKeyFormat">targetObjectKeyFormat</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference">S3BucketLoggingTargetObjectKeyFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetBucketInput">targetBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetGrantInput">targetGrantInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetObjectKeyFormatInput">targetObjectKeyFormatInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetPrefixInput">targetPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetBucket">targetBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetPrefix">targetPrefix</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `targetGrant`<sup>Required</sup> <a name="targetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetGrant"></a>

```java
public S3BucketLoggingTargetGrantList getTargetGrant();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList">S3BucketLoggingTargetGrantList</a>

---

##### `targetObjectKeyFormat`<sup>Required</sup> <a name="targetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetObjectKeyFormat"></a>

```java
public S3BucketLoggingTargetObjectKeyFormatOutputReference getTargetObjectKeyFormat();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference">S3BucketLoggingTargetObjectKeyFormatOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.expectedBucketOwnerInput"></a>

```java
public java.lang.String getExpectedBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `targetBucketInput`<sup>Optional</sup> <a name="targetBucketInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetBucketInput"></a>

```java
public java.lang.String getTargetBucketInput();
```

- *Type:* java.lang.String

---

##### `targetGrantInput`<sup>Optional</sup> <a name="targetGrantInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetGrantInput"></a>

```java
public java.lang.Object getTargetGrantInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>>

---

##### `targetObjectKeyFormatInput`<sup>Optional</sup> <a name="targetObjectKeyFormatInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetObjectKeyFormatInput"></a>

```java
public S3BucketLoggingTargetObjectKeyFormat getTargetObjectKeyFormatInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a>

---

##### `targetPrefixInput`<sup>Optional</sup> <a name="targetPrefixInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetPrefixInput"></a>

```java
public java.lang.String getTargetPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `targetBucket`<sup>Required</sup> <a name="targetBucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetBucket"></a>

```java
public java.lang.String getTargetBucket();
```

- *Type:* java.lang.String

---

##### `targetPrefix`<sup>Required</sup> <a name="targetPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetPrefix"></a>

```java
public java.lang.String getTargetPrefix();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketLoggingAConfig <a name="S3BucketLoggingAConfig" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_logging.S3BucketLoggingAConfig;

S3BucketLoggingAConfig.builder()
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
    .bucket(java.lang.String)
    .targetBucket(java.lang.String)
    .targetPrefix(java.lang.String)
//  .expectedBucketOwner(java.lang.String)
//  .id(java.lang.String)
//  .targetGrant(IResolvable)
//  .targetGrant(java.util.List<S3BucketLoggingTargetGrant>)
//  .targetObjectKeyFormat(S3BucketLoggingTargetObjectKeyFormat)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#bucket S3BucketLoggingA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetBucket">targetBucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#target_bucket S3BucketLoggingA#target_bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetPrefix">targetPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#target_prefix S3BucketLoggingA#target_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#expected_bucket_owner S3BucketLoggingA#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetGrant">targetGrant</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>></code> | target_grant block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetObjectKeyFormat">targetObjectKeyFormat</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a></code> | target_object_key_format block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#bucket S3BucketLoggingA#bucket}.

---

##### `targetBucket`<sup>Required</sup> <a name="targetBucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetBucket"></a>

```java
public java.lang.String getTargetBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#target_bucket S3BucketLoggingA#target_bucket}.

---

##### `targetPrefix`<sup>Required</sup> <a name="targetPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetPrefix"></a>

```java
public java.lang.String getTargetPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#target_prefix S3BucketLoggingA#target_prefix}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#expected_bucket_owner S3BucketLoggingA#expected_bucket_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `targetGrant`<sup>Optional</sup> <a name="targetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetGrant"></a>

```java
public java.lang.Object getTargetGrant();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>>

target_grant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#target_grant S3BucketLoggingA#target_grant}

---

##### `targetObjectKeyFormat`<sup>Optional</sup> <a name="targetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetObjectKeyFormat"></a>

```java
public S3BucketLoggingTargetObjectKeyFormat getTargetObjectKeyFormat();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a>

target_object_key_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#target_object_key_format S3BucketLoggingA#target_object_key_format}

---

### S3BucketLoggingTargetGrant <a name="S3BucketLoggingTargetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_logging.S3BucketLoggingTargetGrant;

S3BucketLoggingTargetGrant.builder()
    .grantee(S3BucketLoggingTargetGrantGrantee)
    .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.property.grantee">grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a></code> | grantee block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#permission S3BucketLoggingA#permission}. |

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.property.grantee"></a>

```java
public S3BucketLoggingTargetGrantGrantee getGrantee();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a>

grantee block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#grantee S3BucketLoggingA#grantee}

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#permission S3BucketLoggingA#permission}.

---

### S3BucketLoggingTargetGrantGrantee <a name="S3BucketLoggingTargetGrantGrantee" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_logging.S3BucketLoggingTargetGrantGrantee;

S3BucketLoggingTargetGrantGrantee.builder()
    .type(java.lang.String)
//  .emailAddress(java.lang.String)
//  .id(java.lang.String)
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#type S3BucketLoggingA#type}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#email_address S3BucketLoggingA#email_address}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#uri S3BucketLoggingA#uri}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#type S3BucketLoggingA#type}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#email_address S3BucketLoggingA#email_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#uri S3BucketLoggingA#uri}.

---

### S3BucketLoggingTargetObjectKeyFormat <a name="S3BucketLoggingTargetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_logging.S3BucketLoggingTargetObjectKeyFormat;

S3BucketLoggingTargetObjectKeyFormat.builder()
//  .partitionedPrefix(S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix)
//  .simplePrefix(S3BucketLoggingTargetObjectKeyFormatSimplePrefix)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.property.partitionedPrefix">partitionedPrefix</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a></code> | partitioned_prefix block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.property.simplePrefix">simplePrefix</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a></code> | simple_prefix block. |

---

##### `partitionedPrefix`<sup>Optional</sup> <a name="partitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.property.partitionedPrefix"></a>

```java
public S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix getPartitionedPrefix();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a>

partitioned_prefix block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#partitioned_prefix S3BucketLoggingA#partitioned_prefix}

---

##### `simplePrefix`<sup>Optional</sup> <a name="simplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.property.simplePrefix"></a>

```java
public S3BucketLoggingTargetObjectKeyFormatSimplePrefix getSimplePrefix();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a>

simple_prefix block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#simple_prefix S3BucketLoggingA#simple_prefix}

---

### S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix <a name="S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_logging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix;

S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix.builder()
    .partitionDateSource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix.property.partitionDateSource">partitionDateSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#partition_date_source S3BucketLoggingA#partition_date_source}. |

---

##### `partitionDateSource`<sup>Required</sup> <a name="partitionDateSource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix.property.partitionDateSource"></a>

```java
public java.lang.String getPartitionDateSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_bucket_logging#partition_date_source S3BucketLoggingA#partition_date_source}.

---

### S3BucketLoggingTargetObjectKeyFormatSimplePrefix <a name="S3BucketLoggingTargetObjectKeyFormatSimplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_logging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix;

S3BucketLoggingTargetObjectKeyFormatSimplePrefix.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### S3BucketLoggingTargetGrantGranteeOutputReference <a name="S3BucketLoggingTargetGrantGranteeOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_logging.S3BucketLoggingTargetGrantGranteeOutputReference;

new S3BucketLoggingTargetGrantGranteeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetEmailAddress"></a>

```java
public void resetEmailAddress()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.emailAddressInput"></a>

```java
public java.lang.String getEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.internalValue"></a>

```java
public S3BucketLoggingTargetGrantGrantee getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a>

---


### S3BucketLoggingTargetGrantList <a name="S3BucketLoggingTargetGrantList" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_logging.S3BucketLoggingTargetGrantList;

new S3BucketLoggingTargetGrantList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.get"></a>

```java
public S3BucketLoggingTargetGrantOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>>

---


### S3BucketLoggingTargetGrantOutputReference <a name="S3BucketLoggingTargetGrantOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_logging.S3BucketLoggingTargetGrantOutputReference;

new S3BucketLoggingTargetGrantOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.putGrantee">putGrantee</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrantee` <a name="putGrantee" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.putGrantee"></a>

```java
public void putGrantee(S3BucketLoggingTargetGrantGrantee value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.putGrantee.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.grantee">grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference">S3BucketLoggingTargetGrantGranteeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.granteeInput">granteeInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.grantee"></a>

```java
public S3BucketLoggingTargetGrantGranteeOutputReference getGrantee();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference">S3BucketLoggingTargetGrantGranteeOutputReference</a>

---

##### `granteeInput`<sup>Optional</sup> <a name="granteeInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.granteeInput"></a>

```java
public S3BucketLoggingTargetGrantGrantee getGranteeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a>

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>

---


### S3BucketLoggingTargetObjectKeyFormatOutputReference <a name="S3BucketLoggingTargetObjectKeyFormatOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_logging.S3BucketLoggingTargetObjectKeyFormatOutputReference;

new S3BucketLoggingTargetObjectKeyFormatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putPartitionedPrefix">putPartitionedPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putSimplePrefix">putSimplePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resetPartitionedPrefix">resetPartitionedPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resetSimplePrefix">resetSimplePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartitionedPrefix` <a name="putPartitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putPartitionedPrefix"></a>

```java
public void putPartitionedPrefix(S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putPartitionedPrefix.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a>

---

##### `putSimplePrefix` <a name="putSimplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putSimplePrefix"></a>

```java
public void putSimplePrefix(S3BucketLoggingTargetObjectKeyFormatSimplePrefix value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putSimplePrefix.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a>

---

##### `resetPartitionedPrefix` <a name="resetPartitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resetPartitionedPrefix"></a>

```java
public void resetPartitionedPrefix()
```

##### `resetSimplePrefix` <a name="resetSimplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resetSimplePrefix"></a>

```java
public void resetSimplePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.partitionedPrefix">partitionedPrefix</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.simplePrefix">simplePrefix</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference">S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.partitionedPrefixInput">partitionedPrefixInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.simplePrefixInput">simplePrefixInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `partitionedPrefix`<sup>Required</sup> <a name="partitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.partitionedPrefix"></a>

```java
public S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference getPartitionedPrefix();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference</a>

---

##### `simplePrefix`<sup>Required</sup> <a name="simplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.simplePrefix"></a>

```java
public S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference getSimplePrefix();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference">S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference</a>

---

##### `partitionedPrefixInput`<sup>Optional</sup> <a name="partitionedPrefixInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.partitionedPrefixInput"></a>

```java
public S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix getPartitionedPrefixInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a>

---

##### `simplePrefixInput`<sup>Optional</sup> <a name="simplePrefixInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.simplePrefixInput"></a>

```java
public S3BucketLoggingTargetObjectKeyFormatSimplePrefix getSimplePrefixInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.internalValue"></a>

```java
public S3BucketLoggingTargetObjectKeyFormat getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a>

---


### S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference <a name="S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_logging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference;

new S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.partitionDateSourceInput">partitionDateSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.partitionDateSource">partitionDateSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `partitionDateSourceInput`<sup>Optional</sup> <a name="partitionDateSourceInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.partitionDateSourceInput"></a>

```java
public java.lang.String getPartitionDateSourceInput();
```

- *Type:* java.lang.String

---

##### `partitionDateSource`<sup>Required</sup> <a name="partitionDateSource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.partitionDateSource"></a>

```java
public java.lang.String getPartitionDateSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.internalValue"></a>

```java
public S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a>

---


### S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference <a name="S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_logging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference;

new S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.internalValue"></a>

```java
public S3BucketLoggingTargetObjectKeyFormatSimplePrefix getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a>

---



