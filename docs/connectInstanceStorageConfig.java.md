# `connectInstanceStorageConfig` Submodule <a name="`connectInstanceStorageConfig` Submodule" id="@cdktf/provider-aws.connectInstanceStorageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectInstanceStorageConfig <a name="ConnectInstanceStorageConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config aws_connect_instance_storage_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfig;

ConnectInstanceStorageConfig.Builder.create(Construct scope, java.lang.String id)
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
    .instanceId(java.lang.String)
    .resourceType(java.lang.String)
    .storageConfig(ConnectInstanceStorageConfigStorageConfig)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#instance_id ConnectInstanceStorageConfig#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#resource_type ConnectInstanceStorageConfig#resource_type}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig">ConnectInstanceStorageConfigStorageConfig</a></code> | storage_config block. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#id ConnectInstanceStorageConfig#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#instance_id ConnectInstanceStorageConfig#instance_id}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.resourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#resource_type ConnectInstanceStorageConfig#resource_type}.

---

##### `storageConfig`<sup>Required</sup> <a name="storageConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.storageConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig">ConnectInstanceStorageConfigStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#storage_config ConnectInstanceStorageConfig#storage_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#id ConnectInstanceStorageConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putStorageConfig">putStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putStorageConfig` <a name="putStorageConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putStorageConfig"></a>

```java
public void putStorageConfig(ConnectInstanceStorageConfigStorageConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig">ConnectInstanceStorageConfigStorageConfig</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfig;

ConnectInstanceStorageConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfig;

ConnectInstanceStorageConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfig;

ConnectInstanceStorageConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.associationId">associationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference">ConnectInstanceStorageConfigStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageConfigInput">storageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig">ConnectInstanceStorageConfigStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.associationId"></a>

```java
public java.lang.String getAssociationId();
```

- *Type:* java.lang.String

---

##### `storageConfig`<sup>Required</sup> <a name="storageConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageConfig"></a>

```java
public ConnectInstanceStorageConfigStorageConfigOutputReference getStorageConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference">ConnectInstanceStorageConfigStorageConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `storageConfigInput`<sup>Optional</sup> <a name="storageConfigInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageConfigInput"></a>

```java
public ConnectInstanceStorageConfigStorageConfig getStorageConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig">ConnectInstanceStorageConfigStorageConfig</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectInstanceStorageConfigConfig <a name="ConnectInstanceStorageConfigConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfigConfig;

ConnectInstanceStorageConfigConfig.builder()
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
    .instanceId(java.lang.String)
    .resourceType(java.lang.String)
    .storageConfig(ConnectInstanceStorageConfigStorageConfig)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#instance_id ConnectInstanceStorageConfig#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#resource_type ConnectInstanceStorageConfig#resource_type}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig">ConnectInstanceStorageConfigStorageConfig</a></code> | storage_config block. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#id ConnectInstanceStorageConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#instance_id ConnectInstanceStorageConfig#instance_id}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#resource_type ConnectInstanceStorageConfig#resource_type}.

---

##### `storageConfig`<sup>Required</sup> <a name="storageConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.storageConfig"></a>

```java
public ConnectInstanceStorageConfigStorageConfig getStorageConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig">ConnectInstanceStorageConfigStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#storage_config ConnectInstanceStorageConfig#storage_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#id ConnectInstanceStorageConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectInstanceStorageConfigStorageConfig <a name="ConnectInstanceStorageConfigStorageConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfigStorageConfig;

ConnectInstanceStorageConfigStorageConfig.builder()
    .storageType(java.lang.String)
//  .kinesisFirehoseConfig(ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig)
//  .kinesisStreamConfig(ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig)
//  .kinesisVideoStreamConfig(ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig)
//  .s3Config(ConnectInstanceStorageConfigStorageConfigS3Config)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#storage_type ConnectInstanceStorageConfig#storage_type}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.kinesisFirehoseConfig">kinesisFirehoseConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig</a></code> | kinesis_firehose_config block. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig</a></code> | kinesis_stream_config block. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.kinesisVideoStreamConfig">kinesisVideoStreamConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig</a></code> | kinesis_video_stream_config block. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.s3Config">s3Config</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config">ConnectInstanceStorageConfigStorageConfigS3Config</a></code> | s3_config block. |

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#storage_type ConnectInstanceStorageConfig#storage_type}.

---

##### `kinesisFirehoseConfig`<sup>Optional</sup> <a name="kinesisFirehoseConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.kinesisFirehoseConfig"></a>

```java
public ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig getKinesisFirehoseConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig</a>

kinesis_firehose_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#kinesis_firehose_config ConnectInstanceStorageConfig#kinesis_firehose_config}

---

##### `kinesisStreamConfig`<sup>Optional</sup> <a name="kinesisStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.kinesisStreamConfig"></a>

```java
public ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig getKinesisStreamConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig</a>

kinesis_stream_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#kinesis_stream_config ConnectInstanceStorageConfig#kinesis_stream_config}

---

##### `kinesisVideoStreamConfig`<sup>Optional</sup> <a name="kinesisVideoStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.kinesisVideoStreamConfig"></a>

```java
public ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig getKinesisVideoStreamConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig</a>

kinesis_video_stream_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#kinesis_video_stream_config ConnectInstanceStorageConfig#kinesis_video_stream_config}

---

##### `s3Config`<sup>Optional</sup> <a name="s3Config" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.s3Config"></a>

```java
public ConnectInstanceStorageConfigStorageConfigS3Config getS3Config();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config">ConnectInstanceStorageConfigStorageConfigS3Config</a>

s3_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#s3_config ConnectInstanceStorageConfig#s3_config}

---

### ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig <a name="ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig;

ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig.builder()
    .firehoseArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig.property.firehoseArn">firehoseArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#firehose_arn ConnectInstanceStorageConfig#firehose_arn}. |

---

##### `firehoseArn`<sup>Required</sup> <a name="firehoseArn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig.property.firehoseArn"></a>

```java
public java.lang.String getFirehoseArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#firehose_arn ConnectInstanceStorageConfig#firehose_arn}.

---

### ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig <a name="ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig;

ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig.builder()
    .streamArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#stream_arn ConnectInstanceStorageConfig#stream_arn}. |

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#stream_arn ConnectInstanceStorageConfig#stream_arn}.

---

### ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig <a name="ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig;

ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.builder()
    .encryptionConfig(ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig)
    .prefix(java.lang.String)
    .retentionPeriodHours(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#prefix ConnectInstanceStorageConfig#prefix}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.property.retentionPeriodHours">retentionPeriodHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#retention_period_hours ConnectInstanceStorageConfig#retention_period_hours}. |

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.property.encryptionConfig"></a>

```java
public ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#prefix ConnectInstanceStorageConfig#prefix}.

---

##### `retentionPeriodHours`<sup>Required</sup> <a name="retentionPeriodHours" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.property.retentionPeriodHours"></a>

```java
public java.lang.Number getRetentionPeriodHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#retention_period_hours ConnectInstanceStorageConfig#retention_period_hours}.

---

### ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig <a name="ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig;

ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.builder()
    .encryptionType(java.lang.String)
    .keyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}. |

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}.

---

### ConnectInstanceStorageConfigStorageConfigS3Config <a name="ConnectInstanceStorageConfigStorageConfigS3Config" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfigStorageConfigS3Config;

ConnectInstanceStorageConfigStorageConfigS3Config.builder()
    .bucketName(java.lang.String)
    .bucketPrefix(java.lang.String)
//  .encryptionConfig(ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#bucket_name ConnectInstanceStorageConfig#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config.property.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#bucket_prefix ConnectInstanceStorageConfig#bucket_prefix}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig</a></code> | encryption_config block. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#bucket_name ConnectInstanceStorageConfig#bucket_name}.

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config.property.bucketPrefix"></a>

```java
public java.lang.String getBucketPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#bucket_prefix ConnectInstanceStorageConfig#bucket_prefix}.

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config.property.encryptionConfig"></a>

```java
public ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}

---

### ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig <a name="ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig;

ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.builder()
    .encryptionType(java.lang.String)
    .keyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}. |

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference <a name="ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference;

new ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArnInput">firehoseArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn">firehoseArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `firehoseArnInput`<sup>Optional</sup> <a name="firehoseArnInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArnInput"></a>

```java
public java.lang.String getFirehoseArnInput();
```

- *Type:* java.lang.String

---

##### `firehoseArn`<sup>Required</sup> <a name="firehoseArn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn"></a>

```java
public java.lang.String getFirehoseArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue"></a>

```java
public ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig</a>

---


### ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference <a name="ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference;

new ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.streamArnInput"></a>

```java
public java.lang.String getStreamArnInput();
```

- *Type:* java.lang.String

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.internalValue"></a>

```java
public ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig</a>

---


### ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference <a name="ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference;

new ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue"></a>

```java
public ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---


### ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference <a name="ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference;

new ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig"></a>

```java
public void putEncryptionConfig(ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHoursInput">retentionPeriodHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours">retentionPeriodHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig"></a>

```java
public ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a>

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfigInput"></a>

```java
public ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig getEncryptionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `retentionPeriodHoursInput`<sup>Optional</sup> <a name="retentionPeriodHoursInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHoursInput"></a>

```java
public java.lang.Number getRetentionPeriodHoursInput();
```

- *Type:* java.lang.Number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `retentionPeriodHours`<sup>Required</sup> <a name="retentionPeriodHours" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours"></a>

```java
public java.lang.Number getRetentionPeriodHours();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue"></a>

```java
public ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig</a>

---


### ConnectInstanceStorageConfigStorageConfigOutputReference <a name="ConnectInstanceStorageConfigStorageConfigOutputReference" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfigStorageConfigOutputReference;

new ConnectInstanceStorageConfigStorageConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisFirehoseConfig">putKinesisFirehoseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisStreamConfig">putKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisVideoStreamConfig">putKinesisVideoStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putS3Config">putS3Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resetKinesisFirehoseConfig">resetKinesisFirehoseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resetKinesisStreamConfig">resetKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resetKinesisVideoStreamConfig">resetKinesisVideoStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resetS3Config">resetS3Config</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKinesisFirehoseConfig` <a name="putKinesisFirehoseConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisFirehoseConfig"></a>

```java
public void putKinesisFirehoseConfig(ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisFirehoseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig</a>

---

##### `putKinesisStreamConfig` <a name="putKinesisStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisStreamConfig"></a>

```java
public void putKinesisStreamConfig(ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisStreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig</a>

---

##### `putKinesisVideoStreamConfig` <a name="putKinesisVideoStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisVideoStreamConfig"></a>

```java
public void putKinesisVideoStreamConfig(ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisVideoStreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig</a>

---

##### `putS3Config` <a name="putS3Config" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putS3Config"></a>

```java
public void putS3Config(ConnectInstanceStorageConfigStorageConfigS3Config value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putS3Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config">ConnectInstanceStorageConfigStorageConfigS3Config</a>

---

##### `resetKinesisFirehoseConfig` <a name="resetKinesisFirehoseConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resetKinesisFirehoseConfig"></a>

```java
public void resetKinesisFirehoseConfig()
```

##### `resetKinesisStreamConfig` <a name="resetKinesisStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resetKinesisStreamConfig"></a>

```java
public void resetKinesisStreamConfig()
```

##### `resetKinesisVideoStreamConfig` <a name="resetKinesisVideoStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resetKinesisVideoStreamConfig"></a>

```java
public void resetKinesisVideoStreamConfig()
```

##### `resetS3Config` <a name="resetS3Config" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resetS3Config"></a>

```java
public void resetS3Config()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisFirehoseConfig">kinesisFirehoseConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisVideoStreamConfig">kinesisVideoStreamConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.s3Config">s3Config</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference">ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisFirehoseConfigInput">kinesisFirehoseConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisStreamConfigInput">kinesisStreamConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisVideoStreamConfigInput">kinesisVideoStreamConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.s3ConfigInput">s3ConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config">ConnectInstanceStorageConfigStorageConfigS3Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig">ConnectInstanceStorageConfigStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kinesisFirehoseConfig`<sup>Required</sup> <a name="kinesisFirehoseConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisFirehoseConfig"></a>

```java
public ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference getKinesisFirehoseConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference</a>

---

##### `kinesisStreamConfig`<sup>Required</sup> <a name="kinesisStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisStreamConfig"></a>

```java
public ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference getKinesisStreamConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference</a>

---

##### `kinesisVideoStreamConfig`<sup>Required</sup> <a name="kinesisVideoStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisVideoStreamConfig"></a>

```java
public ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference getKinesisVideoStreamConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference</a>

---

##### `s3Config`<sup>Required</sup> <a name="s3Config" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.s3Config"></a>

```java
public ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference getS3Config();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference">ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference</a>

---

##### `kinesisFirehoseConfigInput`<sup>Optional</sup> <a name="kinesisFirehoseConfigInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisFirehoseConfigInput"></a>

```java
public ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig getKinesisFirehoseConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig</a>

---

##### `kinesisStreamConfigInput`<sup>Optional</sup> <a name="kinesisStreamConfigInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisStreamConfigInput"></a>

```java
public ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig getKinesisStreamConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig</a>

---

##### `kinesisVideoStreamConfigInput`<sup>Optional</sup> <a name="kinesisVideoStreamConfigInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisVideoStreamConfigInput"></a>

```java
public ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig getKinesisVideoStreamConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig</a>

---

##### `s3ConfigInput`<sup>Optional</sup> <a name="s3ConfigInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.s3ConfigInput"></a>

```java
public ConnectInstanceStorageConfigStorageConfigS3Config getS3ConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config">ConnectInstanceStorageConfigStorageConfigS3Config</a>

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.internalValue"></a>

```java
public ConnectInstanceStorageConfigStorageConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig">ConnectInstanceStorageConfigStorageConfig</a>

---


### ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference <a name="ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference;

new ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue"></a>

```java
public ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig</a>

---


### ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference <a name="ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_instance_storage_config.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference;

new ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.putEncryptionConfig"></a>

```java
public void putEncryptionConfig(ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig</a>

---

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.resetEncryptionConfig"></a>

```java
public void resetEncryptionConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config">ConnectInstanceStorageConfigStorageConfigS3Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.encryptionConfig"></a>

```java
public ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketPrefixInput"></a>

```java
public java.lang.String getBucketPrefixInput();
```

- *Type:* java.lang.String

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.encryptionConfigInput"></a>

```java
public ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig getEncryptionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig</a>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketPrefix"></a>

```java
public java.lang.String getBucketPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.internalValue"></a>

```java
public ConnectInstanceStorageConfigStorageConfigS3Config getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config">ConnectInstanceStorageConfigStorageConfigS3Config</a>

---



