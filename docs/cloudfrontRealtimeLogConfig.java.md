# `cloudfrontRealtimeLogConfig` Submodule <a name="`cloudfrontRealtimeLogConfig` Submodule" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontRealtimeLogConfig <a name="CloudfrontRealtimeLogConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config aws_cloudfront_realtime_log_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_realtime_log_config.CloudfrontRealtimeLogConfig;

CloudfrontRealtimeLogConfig.Builder.create(Construct scope, java.lang.String id)
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
    .endpoint(CloudfrontRealtimeLogConfigEndpoint)
    .fields(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .samplingRate(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a></code> | endpoint block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#fields CloudfrontRealtimeLogConfig#fields}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#name CloudfrontRealtimeLogConfig#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.samplingRate">samplingRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#id CloudfrontRealtimeLogConfig#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.endpoint"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a>

endpoint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#endpoint CloudfrontRealtimeLogConfig#endpoint}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.fields"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#fields CloudfrontRealtimeLogConfig#fields}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#name CloudfrontRealtimeLogConfig#name}.

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.samplingRate"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#id CloudfrontRealtimeLogConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.putEndpoint">putEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEndpoint` <a name="putEndpoint" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.putEndpoint"></a>

```java
public void putEndpoint(CloudfrontRealtimeLogConfigEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_realtime_log_config.CloudfrontRealtimeLogConfig;

CloudfrontRealtimeLogConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_realtime_log_config.CloudfrontRealtimeLogConfig;

CloudfrontRealtimeLogConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_realtime_log_config.CloudfrontRealtimeLogConfig;

CloudfrontRealtimeLogConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference">CloudfrontRealtimeLogConfigEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endpointInput">endpointInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fieldsInput">fieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRateInput">samplingRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRate">samplingRate</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endpoint"></a>

```java
public CloudfrontRealtimeLogConfigEndpointOutputReference getEndpoint();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference">CloudfrontRealtimeLogConfigEndpointOutputReference</a>

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endpointInput"></a>

```java
public CloudfrontRealtimeLogConfigEndpoint getEndpointInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fieldsInput"></a>

```java
public java.util.List<java.lang.String> getFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `samplingRateInput`<sup>Optional</sup> <a name="samplingRateInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRateInput"></a>

```java
public java.lang.Number getSamplingRateInput();
```

- *Type:* java.lang.Number

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fields"></a>

```java
public java.util.List<java.lang.String> getFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRate"></a>

```java
public java.lang.Number getSamplingRate();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontRealtimeLogConfigConfig <a name="CloudfrontRealtimeLogConfigConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_realtime_log_config.CloudfrontRealtimeLogConfigConfig;

CloudfrontRealtimeLogConfigConfig.builder()
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
    .endpoint(CloudfrontRealtimeLogConfigEndpoint)
    .fields(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .samplingRate(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a></code> | endpoint block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#fields CloudfrontRealtimeLogConfig#fields}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#name CloudfrontRealtimeLogConfig#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.samplingRate">samplingRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#id CloudfrontRealtimeLogConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.endpoint"></a>

```java
public CloudfrontRealtimeLogConfigEndpoint getEndpoint();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a>

endpoint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#endpoint CloudfrontRealtimeLogConfig#endpoint}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.fields"></a>

```java
public java.util.List<java.lang.String> getFields();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#fields CloudfrontRealtimeLogConfig#fields}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#name CloudfrontRealtimeLogConfig#name}.

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.samplingRate"></a>

```java
public java.lang.Number getSamplingRate();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#id CloudfrontRealtimeLogConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudfrontRealtimeLogConfigEndpoint <a name="CloudfrontRealtimeLogConfigEndpoint" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_realtime_log_config.CloudfrontRealtimeLogConfigEndpoint;

CloudfrontRealtimeLogConfigEndpoint.builder()
    .kinesisStreamConfig(CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig)
    .streamType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a></code> | kinesis_stream_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint.property.streamType">streamType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#stream_type CloudfrontRealtimeLogConfig#stream_type}. |

---

##### `kinesisStreamConfig`<sup>Required</sup> <a name="kinesisStreamConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint.property.kinesisStreamConfig"></a>

```java
public CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig getKinesisStreamConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a>

kinesis_stream_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#kinesis_stream_config CloudfrontRealtimeLogConfig#kinesis_stream_config}

---

##### `streamType`<sup>Required</sup> <a name="streamType" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint.property.streamType"></a>

```java
public java.lang.String getStreamType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#stream_type CloudfrontRealtimeLogConfig#stream_type}.

---

### CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig <a name="CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_realtime_log_config.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig;

CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.builder()
    .roleArn(java.lang.String)
    .streamArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#role_arn CloudfrontRealtimeLogConfig#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#stream_arn CloudfrontRealtimeLogConfig#stream_arn}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#role_arn CloudfrontRealtimeLogConfig#role_arn}.

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#stream_arn CloudfrontRealtimeLogConfig#stream_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference <a name="CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_realtime_log_config.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference;

new CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArnInput"></a>

```java
public java.lang.String getStreamArnInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.internalValue"></a>

```java
public CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a>

---


### CloudfrontRealtimeLogConfigEndpointOutputReference <a name="CloudfrontRealtimeLogConfigEndpointOutputReference" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_realtime_log_config.CloudfrontRealtimeLogConfigEndpointOutputReference;

new CloudfrontRealtimeLogConfigEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.putKinesisStreamConfig">putKinesisStreamConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKinesisStreamConfig` <a name="putKinesisStreamConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.putKinesisStreamConfig"></a>

```java
public void putKinesisStreamConfig(CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.putKinesisStreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfigInput">kinesisStreamConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.streamTypeInput">streamTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.streamType">streamType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kinesisStreamConfig`<sup>Required</sup> <a name="kinesisStreamConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfig"></a>

```java
public CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference getKinesisStreamConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference</a>

---

##### `kinesisStreamConfigInput`<sup>Optional</sup> <a name="kinesisStreamConfigInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfigInput"></a>

```java
public CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig getKinesisStreamConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a>

---

##### `streamTypeInput`<sup>Optional</sup> <a name="streamTypeInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.streamTypeInput"></a>

```java
public java.lang.String getStreamTypeInput();
```

- *Type:* java.lang.String

---

##### `streamType`<sup>Required</sup> <a name="streamType" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.streamType"></a>

```java
public java.lang.String getStreamType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.internalValue"></a>

```java
public CloudfrontRealtimeLogConfigEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a>

---



