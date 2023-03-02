# `ssmResourceDataSync` Submodule <a name="`ssmResourceDataSync` Submodule" id="@cdktf/provider-aws.ssmResourceDataSync"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmResourceDataSync <a name="SsmResourceDataSync" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync aws_ssm_resource_data_sync}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_resource_data_sync.SsmResourceDataSync;

SsmResourceDataSync.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .s3Destination(SsmResourceDataSyncS3Destination)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#name SsmResourceDataSync#name}. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.s3Destination">s3Destination</a></code> | <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | s3_destination block. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#id SsmResourceDataSync#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#name SsmResourceDataSync#name}.

---

##### `s3Destination`<sup>Required</sup> <a name="s3Destination" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.s3Destination"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#s3_destination SsmResourceDataSync#s3_destination}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#id SsmResourceDataSync#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.putS3Destination">putS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putS3Destination` <a name="putS3Destination" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.putS3Destination"></a>

```java
public void putS3Destination(SsmResourceDataSyncS3Destination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_resource_data_sync.SsmResourceDataSync;

SsmResourceDataSync.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_resource_data_sync.SsmResourceDataSync;

SsmResourceDataSync.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_resource_data_sync.SsmResourceDataSync;

SsmResourceDataSync.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference">SsmResourceDataSyncS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.s3DestinationInput">s3DestinationInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `s3Destination`<sup>Required</sup> <a name="s3Destination" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.s3Destination"></a>

```java
public SsmResourceDataSyncS3DestinationOutputReference getS3Destination();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference">SsmResourceDataSyncS3DestinationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `s3DestinationInput`<sup>Optional</sup> <a name="s3DestinationInput" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.s3DestinationInput"></a>

```java
public SsmResourceDataSyncS3Destination getS3DestinationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsmResourceDataSyncConfig <a name="SsmResourceDataSyncConfig" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_resource_data_sync.SsmResourceDataSyncConfig;

SsmResourceDataSyncConfig.builder()
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
    .name(java.lang.String)
    .s3Destination(SsmResourceDataSyncS3Destination)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#name SsmResourceDataSync#name}. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | s3_destination block. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#id SsmResourceDataSync#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#name SsmResourceDataSync#name}.

---

##### `s3Destination`<sup>Required</sup> <a name="s3Destination" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.s3Destination"></a>

```java
public SsmResourceDataSyncS3Destination getS3Destination();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#s3_destination SsmResourceDataSync#s3_destination}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#id SsmResourceDataSync#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SsmResourceDataSyncS3Destination <a name="SsmResourceDataSyncS3Destination" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_resource_data_sync.SsmResourceDataSyncS3Destination;

SsmResourceDataSyncS3Destination.builder()
    .bucketName(java.lang.String)
    .region(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .prefix(java.lang.String)
//  .syncFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#region SsmResourceDataSync#region}. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#prefix SsmResourceDataSync#prefix}. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.syncFormat">syncFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#region SsmResourceDataSync#region}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#prefix SsmResourceDataSync#prefix}.

---

##### `syncFormat`<sup>Optional</sup> <a name="syncFormat" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.syncFormat"></a>

```java
public java.lang.String getSyncFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmResourceDataSyncS3DestinationOutputReference <a name="SsmResourceDataSyncS3DestinationOutputReference" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_resource_data_sync.SsmResourceDataSyncS3DestinationOutputReference;

new SsmResourceDataSyncS3DestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetSyncFormat">resetSyncFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetSyncFormat` <a name="resetSyncFormat" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetSyncFormat"></a>

```java
public void resetSyncFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormatInput">syncFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormat">syncFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `syncFormatInput`<sup>Optional</sup> <a name="syncFormatInput" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormatInput"></a>

```java
public java.lang.String getSyncFormatInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `syncFormat`<sup>Required</sup> <a name="syncFormat" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormat"></a>

```java
public java.lang.String getSyncFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.internalValue"></a>

```java
public SsmResourceDataSyncS3Destination getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

---



