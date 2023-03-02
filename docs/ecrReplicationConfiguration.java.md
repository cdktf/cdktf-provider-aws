# `ecrReplicationConfiguration` Submodule <a name="`ecrReplicationConfiguration` Submodule" id="@cdktf/provider-aws.ecrReplicationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrReplicationConfiguration <a name="EcrReplicationConfiguration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration aws_ecr_replication_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_replication_configuration.EcrReplicationConfiguration;

EcrReplicationConfiguration.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .replicationConfiguration(EcrReplicationConfigurationReplicationConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#id EcrReplicationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a></code> | replication_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#id EcrReplicationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.replicationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

replication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#replication_configuration EcrReplicationConfiguration#replication_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.putReplicationConfiguration">putReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetReplicationConfiguration">resetReplicationConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putReplicationConfiguration` <a name="putReplicationConfiguration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.putReplicationConfiguration"></a>

```java
public void putReplicationConfiguration(EcrReplicationConfigurationReplicationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetReplicationConfiguration` <a name="resetReplicationConfiguration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetReplicationConfiguration"></a>

```java
public void resetReplicationConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_replication_configuration.EcrReplicationConfiguration;

EcrReplicationConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_replication_configuration.EcrReplicationConfiguration;

EcrReplicationConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_replication_configuration.EcrReplicationConfiguration;

EcrReplicationConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.registryId">registryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference">EcrReplicationConfigurationReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfigurationInput">replicationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.registryId"></a>

```java
public java.lang.String getRegistryId();
```

- *Type:* java.lang.String

---

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfiguration"></a>

```java
public EcrReplicationConfigurationReplicationConfigurationOutputReference getReplicationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference">EcrReplicationConfigurationReplicationConfigurationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `replicationConfigurationInput`<sup>Optional</sup> <a name="replicationConfigurationInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfigurationInput"></a>

```java
public EcrReplicationConfigurationReplicationConfiguration getReplicationConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EcrReplicationConfigurationConfig <a name="EcrReplicationConfigurationConfig" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_replication_configuration.EcrReplicationConfigurationConfig;

EcrReplicationConfigurationConfig.builder()
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
//  .id(java.lang.String)
//  .replicationConfiguration(EcrReplicationConfigurationReplicationConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#id EcrReplicationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a></code> | replication_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#id EcrReplicationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.replicationConfiguration"></a>

```java
public EcrReplicationConfigurationReplicationConfiguration getReplicationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

replication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#replication_configuration EcrReplicationConfiguration#replication_configuration}

---

### EcrReplicationConfigurationReplicationConfiguration <a name="EcrReplicationConfigurationReplicationConfiguration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_replication_configuration.EcrReplicationConfigurationReplicationConfiguration;

EcrReplicationConfigurationReplicationConfiguration.builder()
    .rule(IResolvable)
    .rule(java.util.List<EcrReplicationConfigurationReplicationConfigurationRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>></code> | rule block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#rule EcrReplicationConfiguration#rule}

---

### EcrReplicationConfigurationReplicationConfigurationRule <a name="EcrReplicationConfigurationReplicationConfigurationRule" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_replication_configuration.EcrReplicationConfigurationReplicationConfigurationRule;

EcrReplicationConfigurationReplicationConfigurationRule.builder()
    .destination(IResolvable)
    .destination(java.util.List<EcrReplicationConfigurationReplicationConfigurationRuleDestination>)
//  .repositoryFilter(IResolvable)
//  .repositoryFilter(java.util.List<EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.property.destination">destination</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.property.repositoryFilter">repositoryFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>></code> | repository_filter block. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.property.destination"></a>

```java
public java.lang.Object getDestination();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#destination EcrReplicationConfiguration#destination}

---

##### `repositoryFilter`<sup>Optional</sup> <a name="repositoryFilter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.property.repositoryFilter"></a>

```java
public java.lang.Object getRepositoryFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>>

repository_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#repository_filter EcrReplicationConfiguration#repository_filter}

---

### EcrReplicationConfigurationReplicationConfigurationRuleDestination <a name="EcrReplicationConfigurationReplicationConfigurationRuleDestination" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_replication_configuration.EcrReplicationConfigurationReplicationConfigurationRuleDestination;

EcrReplicationConfigurationReplicationConfigurationRuleDestination.builder()
    .region(java.lang.String)
    .registryId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#region EcrReplicationConfiguration#region}. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.property.registryId">registryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#registry_id EcrReplicationConfiguration#registry_id}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#region EcrReplicationConfiguration#region}.

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.property.registryId"></a>

```java
public java.lang.String getRegistryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#registry_id EcrReplicationConfiguration#registry_id}.

---

### EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter <a name="EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_replication_configuration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter;

EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.builder()
    .filter(java.lang.String)
    .filterType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#filter EcrReplicationConfiguration#filter}. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.property.filterType">filterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#filter_type EcrReplicationConfiguration#filter_type}. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#filter EcrReplicationConfiguration#filter}.

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#filter_type EcrReplicationConfiguration#filter_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcrReplicationConfigurationReplicationConfigurationOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationOutputReference" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_replication_configuration.EcrReplicationConfigurationReplicationConfigurationOutputReference;

new EcrReplicationConfigurationReplicationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.putRule">putRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<EcrReplicationConfigurationReplicationConfigurationRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList">EcrReplicationConfigurationReplicationConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.rule"></a>

```java
public EcrReplicationConfigurationReplicationConfigurationRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList">EcrReplicationConfigurationReplicationConfigurationRuleList</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.internalValue"></a>

```java
public EcrReplicationConfigurationReplicationConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

---


### EcrReplicationConfigurationReplicationConfigurationRuleDestinationList <a name="EcrReplicationConfigurationReplicationConfigurationRuleDestinationList" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_replication_configuration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList;

new EcrReplicationConfigurationReplicationConfigurationRuleDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.get"></a>

```java
public EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>>

---


### EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_replication_configuration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference;

new EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.registryIdInput">registryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.registryId">registryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `registryIdInput`<sup>Optional</sup> <a name="registryIdInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.registryIdInput"></a>

```java
public java.lang.String getRegistryIdInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.registryId"></a>

```java
public java.lang.String getRegistryId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a> OR com.hashicorp.cdktf.IResolvable

---


### EcrReplicationConfigurationReplicationConfigurationRuleList <a name="EcrReplicationConfigurationReplicationConfigurationRuleList" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_replication_configuration.EcrReplicationConfigurationReplicationConfigurationRuleList;

new EcrReplicationConfigurationReplicationConfigurationRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.get"></a>

```java
public EcrReplicationConfigurationReplicationConfigurationRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>>

---


### EcrReplicationConfigurationReplicationConfigurationRuleOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationRuleOutputReference" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_replication_configuration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference;

new EcrReplicationConfigurationReplicationConfigurationRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putRepositoryFilter">putRepositoryFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resetRepositoryFilter">resetRepositoryFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putDestination"></a>

```java
public void putDestination(IResolvable OR java.util.List<EcrReplicationConfigurationReplicationConfigurationRuleDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putDestination.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>>

---

##### `putRepositoryFilter` <a name="putRepositoryFilter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putRepositoryFilter"></a>

```java
public void putRepositoryFilter(IResolvable OR java.util.List<EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putRepositoryFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>>

---

##### `resetRepositoryFilter` <a name="resetRepositoryFilter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resetRepositoryFilter"></a>

```java
public void resetRepositoryFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList">EcrReplicationConfigurationReplicationConfigurationRuleDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.repositoryFilter">repositoryFilter</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.destinationInput">destinationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.repositoryFilterInput">repositoryFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.destination"></a>

```java
public EcrReplicationConfigurationReplicationConfigurationRuleDestinationList getDestination();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList">EcrReplicationConfigurationReplicationConfigurationRuleDestinationList</a>

---

##### `repositoryFilter`<sup>Required</sup> <a name="repositoryFilter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.repositoryFilter"></a>

```java
public EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList getRepositoryFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.destinationInput"></a>

```java
public java.lang.Object getDestinationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>>

---

##### `repositoryFilterInput`<sup>Optional</sup> <a name="repositoryFilterInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.repositoryFilterInput"></a>

```java
public java.lang.Object getRepositoryFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a> OR com.hashicorp.cdktf.IResolvable

---


### EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList <a name="EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_replication_configuration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList;

new EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.get"></a>

```java
public EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>>

---


### EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_replication_configuration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference;

new EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterTypeInput"></a>

```java
public java.lang.String getFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a> OR com.hashicorp.cdktf.IResolvable

---



