# `s3BucketNotification` Submodule <a name="`s3BucketNotification` Submodule" id="@cdktf/provider-aws.s3BucketNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketNotification <a name="S3BucketNotification" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification aws_s3_bucket_notification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_notification.S3BucketNotification;

S3BucketNotification.Builder.create(Construct scope, java.lang.String id)
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
//  .eventbridge(java.lang.Boolean)
//  .eventbridge(IResolvable)
//  .id(java.lang.String)
//  .lambdaFunction(IResolvable)
//  .lambdaFunction(java.util.List<S3BucketNotificationLambdaFunction>)
//  .queue(IResolvable)
//  .queue(java.util.List<S3BucketNotificationQueue>)
//  .topic(IResolvable)
//  .topic(java.util.List<S3BucketNotificationTopic>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#bucket S3BucketNotification#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.eventbridge">eventbridge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#eventbridge S3BucketNotification#eventbridge}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.lambdaFunction">lambdaFunction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>></code> | lambda_function block. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.queue">queue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>></code> | queue block. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.topic">topic</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>></code> | topic block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#bucket S3BucketNotification#bucket}.

---

##### `eventbridge`<sup>Optional</sup> <a name="eventbridge" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.eventbridge"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#eventbridge S3BucketNotification#eventbridge}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambdaFunction`<sup>Optional</sup> <a name="lambdaFunction" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.lambdaFunction"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>>

lambda_function block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#lambda_function S3BucketNotification#lambda_function}

---

##### `queue`<sup>Optional</sup> <a name="queue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.queue"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>>

queue block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#queue S3BucketNotification#queue}

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.topic"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>>

topic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#topic S3BucketNotification#topic}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putLambdaFunction">putLambdaFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putQueue">putQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putTopic">putTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetEventbridge">resetEventbridge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetLambdaFunction">resetLambdaFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetQueue">resetQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLambdaFunction` <a name="putLambdaFunction" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putLambdaFunction"></a>

```java
public void putLambdaFunction(IResolvable OR java.util.List<S3BucketNotificationLambdaFunction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putLambdaFunction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>>

---

##### `putQueue` <a name="putQueue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putQueue"></a>

```java
public void putQueue(IResolvable OR java.util.List<S3BucketNotificationQueue> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putQueue.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>>

---

##### `putTopic` <a name="putTopic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putTopic"></a>

```java
public void putTopic(IResolvable OR java.util.List<S3BucketNotificationTopic> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putTopic.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>>

---

##### `resetEventbridge` <a name="resetEventbridge" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetEventbridge"></a>

```java
public void resetEventbridge()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetId"></a>

```java
public void resetId()
```

##### `resetLambdaFunction` <a name="resetLambdaFunction" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetLambdaFunction"></a>

```java
public void resetLambdaFunction()
```

##### `resetQueue` <a name="resetQueue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetQueue"></a>

```java
public void resetQueue()
```

##### `resetTopic` <a name="resetTopic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetTopic"></a>

```java
public void resetTopic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_notification.S3BucketNotification;

S3BucketNotification.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_notification.S3BucketNotification;

S3BucketNotification.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_notification.S3BucketNotification;

S3BucketNotification.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lambdaFunction">lambdaFunction</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList">S3BucketNotificationLambdaFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.queue">queue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList">S3BucketNotificationQueueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.topic">topic</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList">S3BucketNotificationTopicList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.eventbridgeInput">eventbridgeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lambdaFunctionInput">lambdaFunctionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.queueInput">queueInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.topicInput">topicInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.eventbridge">eventbridge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lambdaFunction`<sup>Required</sup> <a name="lambdaFunction" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lambdaFunction"></a>

```java
public S3BucketNotificationLambdaFunctionList getLambdaFunction();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList">S3BucketNotificationLambdaFunctionList</a>

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.queue"></a>

```java
public S3BucketNotificationQueueList getQueue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList">S3BucketNotificationQueueList</a>

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.topic"></a>

```java
public S3BucketNotificationTopicList getTopic();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList">S3BucketNotificationTopicList</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `eventbridgeInput`<sup>Optional</sup> <a name="eventbridgeInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.eventbridgeInput"></a>

```java
public java.lang.Object getEventbridgeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lambdaFunctionInput`<sup>Optional</sup> <a name="lambdaFunctionInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lambdaFunctionInput"></a>

```java
public java.lang.Object getLambdaFunctionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>>

---

##### `queueInput`<sup>Optional</sup> <a name="queueInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.queueInput"></a>

```java
public java.lang.Object getQueueInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>>

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.topicInput"></a>

```java
public java.lang.Object getTopicInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `eventbridge`<sup>Required</sup> <a name="eventbridge" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.eventbridge"></a>

```java
public java.lang.Object getEventbridge();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketNotificationConfig <a name="S3BucketNotificationConfig" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_notification.S3BucketNotificationConfig;

S3BucketNotificationConfig.builder()
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
//  .eventbridge(java.lang.Boolean)
//  .eventbridge(IResolvable)
//  .id(java.lang.String)
//  .lambdaFunction(IResolvable)
//  .lambdaFunction(java.util.List<S3BucketNotificationLambdaFunction>)
//  .queue(IResolvable)
//  .queue(java.util.List<S3BucketNotificationQueue>)
//  .topic(IResolvable)
//  .topic(java.util.List<S3BucketNotificationTopic>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#bucket S3BucketNotification#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.eventbridge">eventbridge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#eventbridge S3BucketNotification#eventbridge}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.lambdaFunction">lambdaFunction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>></code> | lambda_function block. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.queue">queue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>></code> | queue block. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.topic">topic</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>></code> | topic block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#bucket S3BucketNotification#bucket}.

---

##### `eventbridge`<sup>Optional</sup> <a name="eventbridge" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.eventbridge"></a>

```java
public java.lang.Object getEventbridge();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#eventbridge S3BucketNotification#eventbridge}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambdaFunction`<sup>Optional</sup> <a name="lambdaFunction" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.lambdaFunction"></a>

```java
public java.lang.Object getLambdaFunction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>>

lambda_function block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#lambda_function S3BucketNotification#lambda_function}

---

##### `queue`<sup>Optional</sup> <a name="queue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.queue"></a>

```java
public java.lang.Object getQueue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>>

queue block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#queue S3BucketNotification#queue}

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.topic"></a>

```java
public java.lang.Object getTopic();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>>

topic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#topic S3BucketNotification#topic}

---

### S3BucketNotificationLambdaFunction <a name="S3BucketNotificationLambdaFunction" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_notification.S3BucketNotificationLambdaFunction;

S3BucketNotificationLambdaFunction.builder()
    .events(java.util.List<java.lang.String>)
//  .filterPrefix(java.lang.String)
//  .filterSuffix(java.lang.String)
//  .id(java.lang.String)
//  .lambdaFunctionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.filterPrefix">filterPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.filterSuffix">filterSuffix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#lambda_function_arn S3BucketNotification#lambda_function_arn}. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}.

---

##### `filterPrefix`<sup>Optional</sup> <a name="filterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.filterPrefix"></a>

```java
public java.lang.String getFilterPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}.

---

##### `filterSuffix`<sup>Optional</sup> <a name="filterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.filterSuffix"></a>

```java
public java.lang.String getFilterSuffix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambdaFunctionArn`<sup>Optional</sup> <a name="lambdaFunctionArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.lambdaFunctionArn"></a>

```java
public java.lang.String getLambdaFunctionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#lambda_function_arn S3BucketNotification#lambda_function_arn}.

---

### S3BucketNotificationQueue <a name="S3BucketNotificationQueue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_notification.S3BucketNotificationQueue;

S3BucketNotificationQueue.builder()
    .events(java.util.List<java.lang.String>)
    .queueArn(java.lang.String)
//  .filterPrefix(java.lang.String)
//  .filterSuffix(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.queueArn">queueArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#queue_arn S3BucketNotification#queue_arn}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.filterPrefix">filterPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.filterSuffix">filterSuffix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}.

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.queueArn"></a>

```java
public java.lang.String getQueueArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#queue_arn S3BucketNotification#queue_arn}.

---

##### `filterPrefix`<sup>Optional</sup> <a name="filterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.filterPrefix"></a>

```java
public java.lang.String getFilterPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}.

---

##### `filterSuffix`<sup>Optional</sup> <a name="filterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.filterSuffix"></a>

```java
public java.lang.String getFilterSuffix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### S3BucketNotificationTopic <a name="S3BucketNotificationTopic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_notification.S3BucketNotificationTopic;

S3BucketNotificationTopic.builder()
    .events(java.util.List<java.lang.String>)
    .topicArn(java.lang.String)
//  .filterPrefix(java.lang.String)
//  .filterSuffix(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#topic_arn S3BucketNotification#topic_arn}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.filterPrefix">filterPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.filterSuffix">filterSuffix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}.

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#topic_arn S3BucketNotification#topic_arn}.

---

##### `filterPrefix`<sup>Optional</sup> <a name="filterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.filterPrefix"></a>

```java
public java.lang.String getFilterPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}.

---

##### `filterSuffix`<sup>Optional</sup> <a name="filterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.filterSuffix"></a>

```java
public java.lang.String getFilterSuffix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketNotificationLambdaFunctionList <a name="S3BucketNotificationLambdaFunctionList" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_notification.S3BucketNotificationLambdaFunctionList;

new S3BucketNotificationLambdaFunctionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.get"></a>

```java
public S3BucketNotificationLambdaFunctionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>>

---


### S3BucketNotificationLambdaFunctionOutputReference <a name="S3BucketNotificationLambdaFunctionOutputReference" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_notification.S3BucketNotificationLambdaFunctionOutputReference;

new S3BucketNotificationLambdaFunctionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetFilterPrefix">resetFilterPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetFilterSuffix">resetFilterSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetLambdaFunctionArn">resetLambdaFunctionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterPrefix` <a name="resetFilterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetFilterPrefix"></a>

```java
public void resetFilterPrefix()
```

##### `resetFilterSuffix` <a name="resetFilterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetFilterSuffix"></a>

```java
public void resetFilterSuffix()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetLambdaFunctionArn` <a name="resetLambdaFunctionArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetLambdaFunctionArn"></a>

```java
public void resetLambdaFunctionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.eventsInput">eventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterPrefixInput">filterPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterSuffixInput">filterSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArnInput">lambdaFunctionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterPrefix">filterPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterSuffix">filterSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.eventsInput"></a>

```java
public java.util.List<java.lang.String> getEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterPrefixInput`<sup>Optional</sup> <a name="filterPrefixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterPrefixInput"></a>

```java
public java.lang.String getFilterPrefixInput();
```

- *Type:* java.lang.String

---

##### `filterSuffixInput`<sup>Optional</sup> <a name="filterSuffixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterSuffixInput"></a>

```java
public java.lang.String getFilterSuffixInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lambdaFunctionArnInput`<sup>Optional</sup> <a name="lambdaFunctionArnInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArnInput"></a>

```java
public java.lang.String getLambdaFunctionArnInput();
```

- *Type:* java.lang.String

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterPrefix`<sup>Required</sup> <a name="filterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterPrefix"></a>

```java
public java.lang.String getFilterPrefix();
```

- *Type:* java.lang.String

---

##### `filterSuffix`<sup>Required</sup> <a name="filterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterSuffix"></a>

```java
public java.lang.String getFilterSuffix();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="lambdaFunctionArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArn"></a>

```java
public java.lang.String getLambdaFunctionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a> OR com.hashicorp.cdktf.IResolvable

---


### S3BucketNotificationQueueList <a name="S3BucketNotificationQueueList" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_notification.S3BucketNotificationQueueList;

new S3BucketNotificationQueueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.get"></a>

```java
public S3BucketNotificationQueueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>>

---


### S3BucketNotificationQueueOutputReference <a name="S3BucketNotificationQueueOutputReference" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_notification.S3BucketNotificationQueueOutputReference;

new S3BucketNotificationQueueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetFilterPrefix">resetFilterPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetFilterSuffix">resetFilterSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterPrefix` <a name="resetFilterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetFilterPrefix"></a>

```java
public void resetFilterPrefix()
```

##### `resetFilterSuffix` <a name="resetFilterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetFilterSuffix"></a>

```java
public void resetFilterSuffix()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.eventsInput">eventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterPrefixInput">filterPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterSuffixInput">filterSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.queueArnInput">queueArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterPrefix">filterPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterSuffix">filterSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.queueArn">queueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.eventsInput"></a>

```java
public java.util.List<java.lang.String> getEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterPrefixInput`<sup>Optional</sup> <a name="filterPrefixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterPrefixInput"></a>

```java
public java.lang.String getFilterPrefixInput();
```

- *Type:* java.lang.String

---

##### `filterSuffixInput`<sup>Optional</sup> <a name="filterSuffixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterSuffixInput"></a>

```java
public java.lang.String getFilterSuffixInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `queueArnInput`<sup>Optional</sup> <a name="queueArnInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.queueArnInput"></a>

```java
public java.lang.String getQueueArnInput();
```

- *Type:* java.lang.String

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterPrefix`<sup>Required</sup> <a name="filterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterPrefix"></a>

```java
public java.lang.String getFilterPrefix();
```

- *Type:* java.lang.String

---

##### `filterSuffix`<sup>Required</sup> <a name="filterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterSuffix"></a>

```java
public java.lang.String getFilterSuffix();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.queueArn"></a>

```java
public java.lang.String getQueueArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a> OR com.hashicorp.cdktf.IResolvable

---


### S3BucketNotificationTopicList <a name="S3BucketNotificationTopicList" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_notification.S3BucketNotificationTopicList;

new S3BucketNotificationTopicList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.get"></a>

```java
public S3BucketNotificationTopicOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>>

---


### S3BucketNotificationTopicOutputReference <a name="S3BucketNotificationTopicOutputReference" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_notification.S3BucketNotificationTopicOutputReference;

new S3BucketNotificationTopicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetFilterPrefix">resetFilterPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetFilterSuffix">resetFilterSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterPrefix` <a name="resetFilterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetFilterPrefix"></a>

```java
public void resetFilterPrefix()
```

##### `resetFilterSuffix` <a name="resetFilterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetFilterSuffix"></a>

```java
public void resetFilterSuffix()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.eventsInput">eventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterPrefixInput">filterPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterSuffixInput">filterSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterPrefix">filterPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterSuffix">filterSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.eventsInput"></a>

```java
public java.util.List<java.lang.String> getEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterPrefixInput`<sup>Optional</sup> <a name="filterPrefixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterPrefixInput"></a>

```java
public java.lang.String getFilterPrefixInput();
```

- *Type:* java.lang.String

---

##### `filterSuffixInput`<sup>Optional</sup> <a name="filterSuffixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterSuffixInput"></a>

```java
public java.lang.String getFilterSuffixInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.topicArnInput"></a>

```java
public java.lang.String getTopicArnInput();
```

- *Type:* java.lang.String

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterPrefix`<sup>Required</sup> <a name="filterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterPrefix"></a>

```java
public java.lang.String getFilterPrefix();
```

- *Type:* java.lang.String

---

##### `filterSuffix`<sup>Required</sup> <a name="filterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterSuffix"></a>

```java
public java.lang.String getFilterSuffix();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a> OR com.hashicorp.cdktf.IResolvable

---



