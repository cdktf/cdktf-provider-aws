# `s3BucketReplicationConfiguration` Submodule <a name="`s3BucketReplicationConfiguration` Submodule" id="@cdktf/provider-aws.s3BucketReplicationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketReplicationConfigurationA <a name="S3BucketReplicationConfigurationA" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration aws_s3_bucket_replication_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationA;

S3BucketReplicationConfigurationA.Builder.create(Construct scope, java.lang.String id)
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
    .role(java.lang.String)
    .rule(IResolvable)
    .rule(java.util.List<S3BucketReplicationConfigurationRule>)
//  .id(java.lang.String)
//  .token(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#role S3BucketReplicationConfigurationA#role}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#token S3BucketReplicationConfigurationA#token}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#role S3BucketReplicationConfigurationA#role}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.rule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#rule S3BucketReplicationConfigurationA#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#token S3BucketReplicationConfigurationA#token}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<S3BucketReplicationConfigurationRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetId"></a>

```java
public void resetId()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetToken"></a>

```java
public void resetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationA;

S3BucketReplicationConfigurationA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationA;

S3BucketReplicationConfigurationA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationA;

S3BucketReplicationConfigurationA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList">S3BucketReplicationConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.rule"></a>

```java
public S3BucketReplicationConfigurationRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList">S3BucketReplicationConfigurationRuleList</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>>

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketReplicationConfigurationAConfig <a name="S3BucketReplicationConfigurationAConfig" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationAConfig;

S3BucketReplicationConfigurationAConfig.builder()
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
    .role(java.lang.String)
    .rule(IResolvable)
    .rule(java.util.List<S3BucketReplicationConfigurationRule>)
//  .id(java.lang.String)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#role S3BucketReplicationConfigurationA#role}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#token S3BucketReplicationConfigurationA#token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#role S3BucketReplicationConfigurationA#role}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#rule S3BucketReplicationConfigurationA#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#token S3BucketReplicationConfigurationA#token}.

---

### S3BucketReplicationConfigurationRule <a name="S3BucketReplicationConfigurationRule" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRule;

S3BucketReplicationConfigurationRule.builder()
    .destination(S3BucketReplicationConfigurationRuleDestination)
    .status(java.lang.String)
//  .deleteMarkerReplication(S3BucketReplicationConfigurationRuleDeleteMarkerReplication)
//  .existingObjectReplication(S3BucketReplicationConfigurationRuleExistingObjectReplication)
//  .filter(S3BucketReplicationConfigurationRuleFilter)
//  .id(java.lang.String)
//  .prefix(java.lang.String)
//  .priority(java.lang.Number)
//  .sourceSelectionCriteria(S3BucketReplicationConfigurationRuleSourceSelectionCriteria)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.deleteMarkerReplication">deleteMarkerReplication</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a></code> | delete_marker_replication block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.existingObjectReplication">existingObjectReplication</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a></code> | existing_object_replication block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#priority S3BucketReplicationConfigurationA#priority}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.sourceSelectionCriteria">sourceSelectionCriteria</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a></code> | source_selection_criteria block. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.destination"></a>

```java
public S3BucketReplicationConfigurationRuleDestination getDestination();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#destination S3BucketReplicationConfigurationA#destination}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

##### `deleteMarkerReplication`<sup>Optional</sup> <a name="deleteMarkerReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.deleteMarkerReplication"></a>

```java
public S3BucketReplicationConfigurationRuleDeleteMarkerReplication getDeleteMarkerReplication();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a>

delete_marker_replication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#delete_marker_replication S3BucketReplicationConfigurationA#delete_marker_replication}

---

##### `existingObjectReplication`<sup>Optional</sup> <a name="existingObjectReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.existingObjectReplication"></a>

```java
public S3BucketReplicationConfigurationRuleExistingObjectReplication getExistingObjectReplication();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a>

existing_object_replication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#existing_object_replication S3BucketReplicationConfigurationA#existing_object_replication}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.filter"></a>

```java
public S3BucketReplicationConfigurationRuleFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#filter S3BucketReplicationConfigurationA#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#priority S3BucketReplicationConfigurationA#priority}.

---

##### `sourceSelectionCriteria`<sup>Optional</sup> <a name="sourceSelectionCriteria" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.sourceSelectionCriteria"></a>

```java
public S3BucketReplicationConfigurationRuleSourceSelectionCriteria getSourceSelectionCriteria();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a>

source_selection_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#source_selection_criteria S3BucketReplicationConfigurationA#source_selection_criteria}

---

### S3BucketReplicationConfigurationRuleDeleteMarkerReplication <a name="S3BucketReplicationConfigurationRuleDeleteMarkerReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication;

S3BucketReplicationConfigurationRuleDeleteMarkerReplication.builder()
    .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

### S3BucketReplicationConfigurationRuleDestination <a name="S3BucketReplicationConfigurationRuleDestination" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleDestination;

S3BucketReplicationConfigurationRuleDestination.builder()
    .bucket(java.lang.String)
//  .accessControlTranslation(S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation)
//  .account(java.lang.String)
//  .encryptionConfiguration(S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration)
//  .metrics(S3BucketReplicationConfigurationRuleDestinationMetrics)
//  .replicationTime(S3BucketReplicationConfigurationRuleDestinationReplicationTime)
//  .storageClass(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.accessControlTranslation">accessControlTranslation</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a></code> | access_control_translation block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.account">account</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#account S3BucketReplicationConfigurationA#account}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a></code> | metrics block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.replicationTime">replicationTime</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a></code> | replication_time block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#storage_class S3BucketReplicationConfigurationA#storage_class}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}.

---

##### `accessControlTranslation`<sup>Optional</sup> <a name="accessControlTranslation" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.accessControlTranslation"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation getAccessControlTranslation();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a>

access_control_translation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#access_control_translation S3BucketReplicationConfigurationA#access_control_translation}

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#account S3BucketReplicationConfigurationA#account}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.encryptionConfiguration"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#encryption_configuration S3BucketReplicationConfigurationA#encryption_configuration}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.metrics"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationMetrics getMetrics();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#metrics S3BucketReplicationConfigurationA#metrics}

---

##### `replicationTime`<sup>Optional</sup> <a name="replicationTime" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.replicationTime"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationReplicationTime getReplicationTime();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a>

replication_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#replication_time S3BucketReplicationConfigurationA#replication_time}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#storage_class S3BucketReplicationConfigurationA#storage_class}.

---

### S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation <a name="S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation;

S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation.builder()
    .owner(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#owner S3BucketReplicationConfigurationA#owner}. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#owner S3BucketReplicationConfigurationA#owner}.

---

### S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration <a name="S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration;

S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration.builder()
    .replicaKmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration.property.replicaKmsKeyId">replicaKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#replica_kms_key_id S3BucketReplicationConfigurationA#replica_kms_key_id}. |

---

##### `replicaKmsKeyId`<sup>Required</sup> <a name="replicaKmsKeyId" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration.property.replicaKmsKeyId"></a>

```java
public java.lang.String getReplicaKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#replica_kms_key_id S3BucketReplicationConfigurationA#replica_kms_key_id}.

---

### S3BucketReplicationConfigurationRuleDestinationMetrics <a name="S3BucketReplicationConfigurationRuleDestinationMetrics" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleDestinationMetrics;

S3BucketReplicationConfigurationRuleDestinationMetrics.builder()
    .status(java.lang.String)
//  .eventThreshold(S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics.property.eventThreshold">eventThreshold</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a></code> | event_threshold block. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

##### `eventThreshold`<sup>Optional</sup> <a name="eventThreshold" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics.property.eventThreshold"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold getEventThreshold();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a>

event_threshold block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#event_threshold S3BucketReplicationConfigurationA#event_threshold}

---

### S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold <a name="S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold;

S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold.builder()
    .minutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#minutes S3BucketReplicationConfigurationA#minutes}. |

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#minutes S3BucketReplicationConfigurationA#minutes}.

---

### S3BucketReplicationConfigurationRuleDestinationReplicationTime <a name="S3BucketReplicationConfigurationRuleDestinationReplicationTime" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleDestinationReplicationTime;

S3BucketReplicationConfigurationRuleDestinationReplicationTime.builder()
    .status(java.lang.String)
    .time(S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime.property.time">time</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a></code> | time block. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime.property.time"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime getTime();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a>

time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#time S3BucketReplicationConfigurationA#time}

---

### S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime <a name="S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime;

S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime.builder()
    .minutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#minutes S3BucketReplicationConfigurationA#minutes}. |

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#minutes S3BucketReplicationConfigurationA#minutes}.

---

### S3BucketReplicationConfigurationRuleExistingObjectReplication <a name="S3BucketReplicationConfigurationRuleExistingObjectReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleExistingObjectReplication;

S3BucketReplicationConfigurationRuleExistingObjectReplication.builder()
    .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

### S3BucketReplicationConfigurationRuleFilter <a name="S3BucketReplicationConfigurationRuleFilter" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleFilter;

S3BucketReplicationConfigurationRuleFilter.builder()
//  .and(S3BucketReplicationConfigurationRuleFilterAnd)
//  .prefix(java.lang.String)
//  .tag(S3BucketReplicationConfigurationRuleFilterTag)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a></code> | and block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a></code> | tag block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.and"></a>

```java
public S3BucketReplicationConfigurationRuleFilterAnd getAnd();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a>

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#and S3BucketReplicationConfigurationA#and}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.tag"></a>

```java
public S3BucketReplicationConfigurationRuleFilterTag getTag();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a>

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#tag S3BucketReplicationConfigurationA#tag}

---

### S3BucketReplicationConfigurationRuleFilterAnd <a name="S3BucketReplicationConfigurationRuleFilterAnd" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleFilterAnd;

S3BucketReplicationConfigurationRuleFilterAnd.builder()
//  .prefix(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#tags S3BucketReplicationConfigurationA#tags}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#tags S3BucketReplicationConfigurationA#tags}.

---

### S3BucketReplicationConfigurationRuleFilterTag <a name="S3BucketReplicationConfigurationRuleFilterTag" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleFilterTag;

S3BucketReplicationConfigurationRuleFilterTag.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#key S3BucketReplicationConfigurationA#key}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#value S3BucketReplicationConfigurationA#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#key S3BucketReplicationConfigurationA#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#value S3BucketReplicationConfigurationA#value}.

---

### S3BucketReplicationConfigurationRuleSourceSelectionCriteria <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteria" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria;

S3BucketReplicationConfigurationRuleSourceSelectionCriteria.builder()
//  .replicaModifications(S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications)
//  .sseKmsEncryptedObjects(S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria.property.replicaModifications">replicaModifications</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a></code> | replica_modifications block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria.property.sseKmsEncryptedObjects">sseKmsEncryptedObjects</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a></code> | sse_kms_encrypted_objects block. |

---

##### `replicaModifications`<sup>Optional</sup> <a name="replicaModifications" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria.property.replicaModifications"></a>

```java
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications getReplicaModifications();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a>

replica_modifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#replica_modifications S3BucketReplicationConfigurationA#replica_modifications}

---

##### `sseKmsEncryptedObjects`<sup>Optional</sup> <a name="sseKmsEncryptedObjects" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria.property.sseKmsEncryptedObjects"></a>

```java
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects getSseKmsEncryptedObjects();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a>

sse_kms_encrypted_objects block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#sse_kms_encrypted_objects S3BucketReplicationConfigurationA#sse_kms_encrypted_objects}

---

### S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications;

S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications.builder()
    .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

### S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects;

S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects.builder()
    .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference <a name="S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference;

new S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.internalValue"></a>

```java
public S3BucketReplicationConfigurationRuleDeleteMarkerReplication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a>

---


### S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference;

new S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.internalValue"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a>

---


### S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference;

new S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.replicaKmsKeyIdInput">replicaKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.replicaKmsKeyId">replicaKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `replicaKmsKeyIdInput`<sup>Optional</sup> <a name="replicaKmsKeyIdInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.replicaKmsKeyIdInput"></a>

```java
public java.lang.String getReplicaKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `replicaKmsKeyId`<sup>Required</sup> <a name="replicaKmsKeyId" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.replicaKmsKeyId"></a>

```java
public java.lang.String getReplicaKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a>

---


### S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference;

new S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.internalValue"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a>

---


### S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference;

new S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.putEventThreshold">putEventThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resetEventThreshold">resetEventThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEventThreshold` <a name="putEventThreshold" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.putEventThreshold"></a>

```java
public void putEventThreshold(S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.putEventThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a>

---

##### `resetEventThreshold` <a name="resetEventThreshold" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resetEventThreshold"></a>

```java
public void resetEventThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.eventThreshold">eventThreshold</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference">S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.eventThresholdInput">eventThresholdInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventThreshold`<sup>Required</sup> <a name="eventThreshold" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.eventThreshold"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference getEventThreshold();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference">S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference</a>

---

##### `eventThresholdInput`<sup>Optional</sup> <a name="eventThresholdInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.eventThresholdInput"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold getEventThresholdInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.internalValue"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationMetrics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a>

---


### S3BucketReplicationConfigurationRuleDestinationOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleDestinationOutputReference;

new S3BucketReplicationConfigurationRuleDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putAccessControlTranslation">putAccessControlTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putMetrics">putMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putReplicationTime">putReplicationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetAccessControlTranslation">resetAccessControlTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetMetrics">resetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetReplicationTime">resetReplicationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessControlTranslation` <a name="putAccessControlTranslation" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putAccessControlTranslation"></a>

```java
public void putAccessControlTranslation(S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putAccessControlTranslation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a>

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a>

---

##### `putMetrics` <a name="putMetrics" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putMetrics"></a>

```java
public void putMetrics(S3BucketReplicationConfigurationRuleDestinationMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a>

---

##### `putReplicationTime` <a name="putReplicationTime" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putReplicationTime"></a>

```java
public void putReplicationTime(S3BucketReplicationConfigurationRuleDestinationReplicationTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putReplicationTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a>

---

##### `resetAccessControlTranslation` <a name="resetAccessControlTranslation" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetAccessControlTranslation"></a>

```java
public void resetAccessControlTranslation()
```

##### `resetAccount` <a name="resetAccount" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetAccount"></a>

```java
public void resetAccount()
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```

##### `resetMetrics` <a name="resetMetrics" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetMetrics"></a>

```java
public void resetMetrics()
```

##### `resetReplicationTime` <a name="resetReplicationTime" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetReplicationTime"></a>

```java
public void resetReplicationTime()
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetStorageClass"></a>

```java
public void resetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accessControlTranslation">accessControlTranslation</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference">S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference">S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.replicationTime">replicationTime</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference">S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accessControlTranslationInput">accessControlTranslationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accountInput">accountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.metricsInput">metricsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.replicationTimeInput">replicationTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.account">account</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessControlTranslation`<sup>Required</sup> <a name="accessControlTranslation" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accessControlTranslation"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference getAccessControlTranslation();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference</a>

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.encryptionConfiguration"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference">S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference</a>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.metrics"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference getMetrics();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference">S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference</a>

---

##### `replicationTime`<sup>Required</sup> <a name="replicationTime" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.replicationTime"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference getReplicationTime();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference">S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference</a>

---

##### `accessControlTranslationInput`<sup>Optional</sup> <a name="accessControlTranslationInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accessControlTranslationInput"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation getAccessControlTranslationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a>

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accountInput"></a>

```java
public java.lang.String getAccountInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.encryptionConfigurationInput"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a>

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.metricsInput"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationMetrics getMetricsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a>

---

##### `replicationTimeInput`<sup>Optional</sup> <a name="replicationTimeInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.replicationTimeInput"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationReplicationTime getReplicationTimeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a>

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.internalValue"></a>

```java
public S3BucketReplicationConfigurationRuleDestination getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a>

---


### S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference;

new S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.putTime">putTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTime` <a name="putTime" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.putTime"></a>

```java
public void putTime(S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.putTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.time">time</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.timeInput">timeInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.time"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference getTime();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.timeInput"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime getTimeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.internalValue"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationReplicationTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a>

---


### S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference;

new S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.internalValue"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a>

---


### S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference <a name="S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference;

new S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.internalValue"></a>

```java
public S3BucketReplicationConfigurationRuleExistingObjectReplication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a>

---


### S3BucketReplicationConfigurationRuleFilterAndOutputReference <a name="S3BucketReplicationConfigurationRuleFilterAndOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleFilterAndOutputReference;

new S3BucketReplicationConfigurationRuleFilterAndOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.internalValue"></a>

```java
public S3BucketReplicationConfigurationRuleFilterAnd getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a>

---


### S3BucketReplicationConfigurationRuleFilterOutputReference <a name="S3BucketReplicationConfigurationRuleFilterOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleFilterOutputReference;

new S3BucketReplicationConfigurationRuleFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putAnd">putAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetAnd">resetAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnd` <a name="putAnd" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putAnd"></a>

```java
public void putAnd(S3BucketReplicationConfigurationRuleFilterAnd value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putAnd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a>

---

##### `putTag` <a name="putTag" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putTag"></a>

```java
public void putTag(S3BucketReplicationConfigurationRuleFilterTag value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a>

---

##### `resetAnd` <a name="resetAnd" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetAnd"></a>

```java
public void resetAnd()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetTag"></a>

```java
public void resetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference">S3BucketReplicationConfigurationRuleFilterAndOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference">S3BucketReplicationConfigurationRuleFilterTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.andInput">andInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.tagInput">tagInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.and"></a>

```java
public S3BucketReplicationConfigurationRuleFilterAndOutputReference getAnd();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference">S3BucketReplicationConfigurationRuleFilterAndOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.tag"></a>

```java
public S3BucketReplicationConfigurationRuleFilterTagOutputReference getTag();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference">S3BucketReplicationConfigurationRuleFilterTagOutputReference</a>

---

##### `andInput`<sup>Optional</sup> <a name="andInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.andInput"></a>

```java
public S3BucketReplicationConfigurationRuleFilterAnd getAndInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.tagInput"></a>

```java
public S3BucketReplicationConfigurationRuleFilterTag getTagInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.internalValue"></a>

```java
public S3BucketReplicationConfigurationRuleFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a>

---


### S3BucketReplicationConfigurationRuleFilterTagOutputReference <a name="S3BucketReplicationConfigurationRuleFilterTagOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleFilterTagOutputReference;

new S3BucketReplicationConfigurationRuleFilterTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.internalValue"></a>

```java
public S3BucketReplicationConfigurationRuleFilterTag getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a>

---


### S3BucketReplicationConfigurationRuleList <a name="S3BucketReplicationConfigurationRuleList" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleList;

new S3BucketReplicationConfigurationRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.get"></a>

```java
public S3BucketReplicationConfigurationRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>>

---


### S3BucketReplicationConfigurationRuleOutputReference <a name="S3BucketReplicationConfigurationRuleOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleOutputReference;

new S3BucketReplicationConfigurationRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDeleteMarkerReplication">putDeleteMarkerReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putExistingObjectReplication">putExistingObjectReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putSourceSelectionCriteria">putSourceSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetDeleteMarkerReplication">resetDeleteMarkerReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetExistingObjectReplication">resetExistingObjectReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetSourceSelectionCriteria">resetSourceSelectionCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeleteMarkerReplication` <a name="putDeleteMarkerReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDeleteMarkerReplication"></a>

```java
public void putDeleteMarkerReplication(S3BucketReplicationConfigurationRuleDeleteMarkerReplication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDeleteMarkerReplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a>

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDestination"></a>

```java
public void putDestination(S3BucketReplicationConfigurationRuleDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a>

---

##### `putExistingObjectReplication` <a name="putExistingObjectReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putExistingObjectReplication"></a>

```java
public void putExistingObjectReplication(S3BucketReplicationConfigurationRuleExistingObjectReplication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putExistingObjectReplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putFilter"></a>

```java
public void putFilter(S3BucketReplicationConfigurationRuleFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a>

---

##### `putSourceSelectionCriteria` <a name="putSourceSelectionCriteria" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putSourceSelectionCriteria"></a>

```java
public void putSourceSelectionCriteria(S3BucketReplicationConfigurationRuleSourceSelectionCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putSourceSelectionCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a>

---

##### `resetDeleteMarkerReplication` <a name="resetDeleteMarkerReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetDeleteMarkerReplication"></a>

```java
public void resetDeleteMarkerReplication()
```

##### `resetExistingObjectReplication` <a name="resetExistingObjectReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetExistingObjectReplication"></a>

```java
public void resetExistingObjectReplication()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetSourceSelectionCriteria` <a name="resetSourceSelectionCriteria" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetSourceSelectionCriteria"></a>

```java
public void resetSourceSelectionCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.deleteMarkerReplication">deleteMarkerReplication</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference">S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference">S3BucketReplicationConfigurationRuleDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.existingObjectReplication">existingObjectReplication</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference">S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference">S3BucketReplicationConfigurationRuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.sourceSelectionCriteria">sourceSelectionCriteria</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.deleteMarkerReplicationInput">deleteMarkerReplicationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.existingObjectReplicationInput">existingObjectReplicationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.sourceSelectionCriteriaInput">sourceSelectionCriteriaInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteMarkerReplication`<sup>Required</sup> <a name="deleteMarkerReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.deleteMarkerReplication"></a>

```java
public S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference getDeleteMarkerReplication();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference">S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference</a>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.destination"></a>

```java
public S3BucketReplicationConfigurationRuleDestinationOutputReference getDestination();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference">S3BucketReplicationConfigurationRuleDestinationOutputReference</a>

---

##### `existingObjectReplication`<sup>Required</sup> <a name="existingObjectReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.existingObjectReplication"></a>

```java
public S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference getExistingObjectReplication();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference">S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.filter"></a>

```java
public S3BucketReplicationConfigurationRuleFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference">S3BucketReplicationConfigurationRuleFilterOutputReference</a>

---

##### `sourceSelectionCriteria`<sup>Required</sup> <a name="sourceSelectionCriteria" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.sourceSelectionCriteria"></a>

```java
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference getSourceSelectionCriteria();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference</a>

---

##### `deleteMarkerReplicationInput`<sup>Optional</sup> <a name="deleteMarkerReplicationInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.deleteMarkerReplicationInput"></a>

```java
public S3BucketReplicationConfigurationRuleDeleteMarkerReplication getDeleteMarkerReplicationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.destinationInput"></a>

```java
public S3BucketReplicationConfigurationRuleDestination getDestinationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a>

---

##### `existingObjectReplicationInput`<sup>Optional</sup> <a name="existingObjectReplicationInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.existingObjectReplicationInput"></a>

```java
public S3BucketReplicationConfigurationRuleExistingObjectReplication getExistingObjectReplicationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.filterInput"></a>

```java
public S3BucketReplicationConfigurationRuleFilter getFilterInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `sourceSelectionCriteriaInput`<sup>Optional</sup> <a name="sourceSelectionCriteriaInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.sourceSelectionCriteriaInput"></a>

```java
public S3BucketReplicationConfigurationRuleSourceSelectionCriteria getSourceSelectionCriteriaInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a> OR com.hashicorp.cdktf.IResolvable

---


### S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference;

new S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putReplicaModifications">putReplicaModifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putSseKmsEncryptedObjects">putSseKmsEncryptedObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resetReplicaModifications">resetReplicaModifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resetSseKmsEncryptedObjects">resetSseKmsEncryptedObjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReplicaModifications` <a name="putReplicaModifications" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putReplicaModifications"></a>

```java
public void putReplicaModifications(S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putReplicaModifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a>

---

##### `putSseKmsEncryptedObjects` <a name="putSseKmsEncryptedObjects" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putSseKmsEncryptedObjects"></a>

```java
public void putSseKmsEncryptedObjects(S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putSseKmsEncryptedObjects.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a>

---

##### `resetReplicaModifications` <a name="resetReplicaModifications" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resetReplicaModifications"></a>

```java
public void resetReplicaModifications()
```

##### `resetSseKmsEncryptedObjects` <a name="resetSseKmsEncryptedObjects" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resetSseKmsEncryptedObjects"></a>

```java
public void resetSseKmsEncryptedObjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.replicaModifications">replicaModifications</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjects">sseKmsEncryptedObjects</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.replicaModificationsInput">replicaModificationsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjectsInput">sseKmsEncryptedObjectsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `replicaModifications`<sup>Required</sup> <a name="replicaModifications" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.replicaModifications"></a>

```java
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference getReplicaModifications();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference</a>

---

##### `sseKmsEncryptedObjects`<sup>Required</sup> <a name="sseKmsEncryptedObjects" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjects"></a>

```java
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference getSseKmsEncryptedObjects();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference</a>

---

##### `replicaModificationsInput`<sup>Optional</sup> <a name="replicaModificationsInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.replicaModificationsInput"></a>

```java
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications getReplicaModificationsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a>

---

##### `sseKmsEncryptedObjectsInput`<sup>Optional</sup> <a name="sseKmsEncryptedObjectsInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjectsInput"></a>

```java
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects getSseKmsEncryptedObjectsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.internalValue"></a>

```java
public S3BucketReplicationConfigurationRuleSourceSelectionCriteria getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a>

---


### S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference;

new S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.internalValue"></a>

```java
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a>

---


### S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_replication_configuration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference;

new S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.internalValue"></a>

```java
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a>

---



