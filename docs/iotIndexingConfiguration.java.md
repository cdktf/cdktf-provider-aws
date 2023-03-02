# `iotIndexingConfiguration` Submodule <a name="`iotIndexingConfiguration` Submodule" id="@cdktf/provider-aws.iotIndexingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotIndexingConfiguration <a name="IotIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration aws_iot_indexing_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfiguration;

IotIndexingConfiguration.Builder.create(Construct scope, java.lang.String id)
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
//  .thingGroupIndexingConfiguration(IotIndexingConfigurationThingGroupIndexingConfiguration)
//  .thingIndexingConfiguration(IotIndexingConfigurationThingIndexingConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#id IotIndexingConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.thingGroupIndexingConfiguration">thingGroupIndexingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a></code> | thing_group_indexing_configuration block. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.thingIndexingConfiguration">thingIndexingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a></code> | thing_indexing_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#id IotIndexingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `thingGroupIndexingConfiguration`<sup>Optional</sup> <a name="thingGroupIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.thingGroupIndexingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a>

thing_group_indexing_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_group_indexing_configuration IotIndexingConfiguration#thing_group_indexing_configuration}

---

##### `thingIndexingConfiguration`<sup>Optional</sup> <a name="thingIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.thingIndexingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a>

thing_indexing_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_indexing_configuration IotIndexingConfiguration#thing_indexing_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingGroupIndexingConfiguration">putThingGroupIndexingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingIndexingConfiguration">putThingIndexingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetThingGroupIndexingConfiguration">resetThingGroupIndexingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetThingIndexingConfiguration">resetThingIndexingConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putThingGroupIndexingConfiguration` <a name="putThingGroupIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingGroupIndexingConfiguration"></a>

```java
public void putThingGroupIndexingConfiguration(IotIndexingConfigurationThingGroupIndexingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingGroupIndexingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a>

---

##### `putThingIndexingConfiguration` <a name="putThingIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingIndexingConfiguration"></a>

```java
public void putThingIndexingConfiguration(IotIndexingConfigurationThingIndexingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingIndexingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetThingGroupIndexingConfiguration` <a name="resetThingGroupIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetThingGroupIndexingConfiguration"></a>

```java
public void resetThingGroupIndexingConfiguration()
```

##### `resetThingIndexingConfiguration` <a name="resetThingIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetThingIndexingConfiguration"></a>

```java
public void resetThingIndexingConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfiguration;

IotIndexingConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfiguration;

IotIndexingConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfiguration;

IotIndexingConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingGroupIndexingConfiguration">thingGroupIndexingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference">IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingIndexingConfiguration">thingIndexingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference">IotIndexingConfigurationThingIndexingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingGroupIndexingConfigurationInput">thingGroupIndexingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingIndexingConfigurationInput">thingIndexingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `thingGroupIndexingConfiguration`<sup>Required</sup> <a name="thingGroupIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingGroupIndexingConfiguration"></a>

```java
public IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference getThingGroupIndexingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference">IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference</a>

---

##### `thingIndexingConfiguration`<sup>Required</sup> <a name="thingIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingIndexingConfiguration"></a>

```java
public IotIndexingConfigurationThingIndexingConfigurationOutputReference getThingIndexingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference">IotIndexingConfigurationThingIndexingConfigurationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `thingGroupIndexingConfigurationInput`<sup>Optional</sup> <a name="thingGroupIndexingConfigurationInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingGroupIndexingConfigurationInput"></a>

```java
public IotIndexingConfigurationThingGroupIndexingConfiguration getThingGroupIndexingConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a>

---

##### `thingIndexingConfigurationInput`<sup>Optional</sup> <a name="thingIndexingConfigurationInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingIndexingConfigurationInput"></a>

```java
public IotIndexingConfigurationThingIndexingConfiguration getThingIndexingConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotIndexingConfigurationConfig <a name="IotIndexingConfigurationConfig" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfigurationConfig;

IotIndexingConfigurationConfig.builder()
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
//  .thingGroupIndexingConfiguration(IotIndexingConfigurationThingGroupIndexingConfiguration)
//  .thingIndexingConfiguration(IotIndexingConfigurationThingIndexingConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#id IotIndexingConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.thingGroupIndexingConfiguration">thingGroupIndexingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a></code> | thing_group_indexing_configuration block. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.thingIndexingConfiguration">thingIndexingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a></code> | thing_indexing_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#id IotIndexingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `thingGroupIndexingConfiguration`<sup>Optional</sup> <a name="thingGroupIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.thingGroupIndexingConfiguration"></a>

```java
public IotIndexingConfigurationThingGroupIndexingConfiguration getThingGroupIndexingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a>

thing_group_indexing_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_group_indexing_configuration IotIndexingConfiguration#thing_group_indexing_configuration}

---

##### `thingIndexingConfiguration`<sup>Optional</sup> <a name="thingIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.thingIndexingConfiguration"></a>

```java
public IotIndexingConfigurationThingIndexingConfiguration getThingIndexingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a>

thing_indexing_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_indexing_configuration IotIndexingConfiguration#thing_indexing_configuration}

---

### IotIndexingConfigurationThingGroupIndexingConfiguration <a name="IotIndexingConfigurationThingGroupIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfigurationThingGroupIndexingConfiguration;

IotIndexingConfigurationThingGroupIndexingConfiguration.builder()
    .thingGroupIndexingMode(java.lang.String)
//  .customField(IResolvable)
//  .customField(java.util.List<IotIndexingConfigurationThingGroupIndexingConfigurationCustomField>)
//  .managedField(IResolvable)
//  .managedField(java.util.List<IotIndexingConfigurationThingGroupIndexingConfigurationManagedField>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.thingGroupIndexingMode">thingGroupIndexingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_group_indexing_mode IotIndexingConfiguration#thing_group_indexing_mode}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.customField">customField</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a>></code> | custom_field block. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.managedField">managedField</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a>></code> | managed_field block. |

---

##### `thingGroupIndexingMode`<sup>Required</sup> <a name="thingGroupIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.thingGroupIndexingMode"></a>

```java
public java.lang.String getThingGroupIndexingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_group_indexing_mode IotIndexingConfiguration#thing_group_indexing_mode}.

---

##### `customField`<sup>Optional</sup> <a name="customField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.customField"></a>

```java
public java.lang.Object getCustomField();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a>>

custom_field block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#custom_field IotIndexingConfiguration#custom_field}

---

##### `managedField`<sup>Optional</sup> <a name="managedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.managedField"></a>

```java
public java.lang.Object getManagedField();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a>>

managed_field block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#managed_field IotIndexingConfiguration#managed_field}

---

### IotIndexingConfigurationThingGroupIndexingConfigurationCustomField <a name="IotIndexingConfigurationThingGroupIndexingConfigurationCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField;

IotIndexingConfigurationThingGroupIndexingConfigurationCustomField.builder()
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}.

---

### IotIndexingConfigurationThingGroupIndexingConfigurationManagedField <a name="IotIndexingConfigurationThingGroupIndexingConfigurationManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField;

IotIndexingConfigurationThingGroupIndexingConfigurationManagedField.builder()
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}.

---

### IotIndexingConfigurationThingIndexingConfiguration <a name="IotIndexingConfigurationThingIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfigurationThingIndexingConfiguration;

IotIndexingConfigurationThingIndexingConfiguration.builder()
    .thingIndexingMode(java.lang.String)
//  .customField(IResolvable)
//  .customField(java.util.List<IotIndexingConfigurationThingIndexingConfigurationCustomField>)
//  .deviceDefenderIndexingMode(java.lang.String)
//  .managedField(IResolvable)
//  .managedField(java.util.List<IotIndexingConfigurationThingIndexingConfigurationManagedField>)
//  .namedShadowIndexingMode(java.lang.String)
//  .thingConnectivityIndexingMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.thingIndexingMode">thingIndexingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_indexing_mode IotIndexingConfiguration#thing_indexing_mode}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.customField">customField</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a>></code> | custom_field block. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.deviceDefenderIndexingMode">deviceDefenderIndexingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#device_defender_indexing_mode IotIndexingConfiguration#device_defender_indexing_mode}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.managedField">managedField</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a>></code> | managed_field block. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.namedShadowIndexingMode">namedShadowIndexingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#named_shadow_indexing_mode IotIndexingConfiguration#named_shadow_indexing_mode}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.thingConnectivityIndexingMode">thingConnectivityIndexingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_connectivity_indexing_mode IotIndexingConfiguration#thing_connectivity_indexing_mode}. |

---

##### `thingIndexingMode`<sup>Required</sup> <a name="thingIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.thingIndexingMode"></a>

```java
public java.lang.String getThingIndexingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_indexing_mode IotIndexingConfiguration#thing_indexing_mode}.

---

##### `customField`<sup>Optional</sup> <a name="customField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.customField"></a>

```java
public java.lang.Object getCustomField();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a>>

custom_field block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#custom_field IotIndexingConfiguration#custom_field}

---

##### `deviceDefenderIndexingMode`<sup>Optional</sup> <a name="deviceDefenderIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.deviceDefenderIndexingMode"></a>

```java
public java.lang.String getDeviceDefenderIndexingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#device_defender_indexing_mode IotIndexingConfiguration#device_defender_indexing_mode}.

---

##### `managedField`<sup>Optional</sup> <a name="managedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.managedField"></a>

```java
public java.lang.Object getManagedField();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a>>

managed_field block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#managed_field IotIndexingConfiguration#managed_field}

---

##### `namedShadowIndexingMode`<sup>Optional</sup> <a name="namedShadowIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.namedShadowIndexingMode"></a>

```java
public java.lang.String getNamedShadowIndexingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#named_shadow_indexing_mode IotIndexingConfiguration#named_shadow_indexing_mode}.

---

##### `thingConnectivityIndexingMode`<sup>Optional</sup> <a name="thingConnectivityIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.thingConnectivityIndexingMode"></a>

```java
public java.lang.String getThingConnectivityIndexingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_connectivity_indexing_mode IotIndexingConfiguration#thing_connectivity_indexing_mode}.

---

### IotIndexingConfigurationThingIndexingConfigurationCustomField <a name="IotIndexingConfigurationThingIndexingConfigurationCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfigurationThingIndexingConfigurationCustomField;

IotIndexingConfigurationThingIndexingConfigurationCustomField.builder()
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}.

---

### IotIndexingConfigurationThingIndexingConfigurationManagedField <a name="IotIndexingConfigurationThingIndexingConfigurationManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfigurationThingIndexingConfigurationManagedField;

IotIndexingConfigurationThingIndexingConfigurationManagedField.builder()
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList <a name="IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList;

new IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.get"></a>

```java
public IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a>>

---


### IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference <a name="IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference;

new IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a> OR com.hashicorp.cdktf.IResolvable

---


### IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList <a name="IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList;

new IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.get"></a>

```java
public IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a>>

---


### IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference <a name="IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference;

new IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a> OR com.hashicorp.cdktf.IResolvable

---


### IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference <a name="IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference;

new IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putCustomField">putCustomField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putManagedField">putManagedField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resetCustomField">resetCustomField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resetManagedField">resetManagedField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomField` <a name="putCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putCustomField"></a>

```java
public void putCustomField(IResolvable OR java.util.List<IotIndexingConfigurationThingGroupIndexingConfigurationCustomField> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putCustomField.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a>>

---

##### `putManagedField` <a name="putManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putManagedField"></a>

```java
public void putManagedField(IResolvable OR java.util.List<IotIndexingConfigurationThingGroupIndexingConfigurationManagedField> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putManagedField.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a>>

---

##### `resetCustomField` <a name="resetCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resetCustomField"></a>

```java
public void resetCustomField()
```

##### `resetManagedField` <a name="resetManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resetManagedField"></a>

```java
public void resetManagedField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.customField">customField</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList">IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.managedField">managedField</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList">IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.customFieldInput">customFieldInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.managedFieldInput">managedFieldInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.thingGroupIndexingModeInput">thingGroupIndexingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.thingGroupIndexingMode">thingGroupIndexingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customField`<sup>Required</sup> <a name="customField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.customField"></a>

```java
public IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList getCustomField();
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList">IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList</a>

---

##### `managedField`<sup>Required</sup> <a name="managedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.managedField"></a>

```java
public IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList getManagedField();
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList">IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList</a>

---

##### `customFieldInput`<sup>Optional</sup> <a name="customFieldInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.customFieldInput"></a>

```java
public java.lang.Object getCustomFieldInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a>>

---

##### `managedFieldInput`<sup>Optional</sup> <a name="managedFieldInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.managedFieldInput"></a>

```java
public java.lang.Object getManagedFieldInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a>>

---

##### `thingGroupIndexingModeInput`<sup>Optional</sup> <a name="thingGroupIndexingModeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.thingGroupIndexingModeInput"></a>

```java
public java.lang.String getThingGroupIndexingModeInput();
```

- *Type:* java.lang.String

---

##### `thingGroupIndexingMode`<sup>Required</sup> <a name="thingGroupIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.thingGroupIndexingMode"></a>

```java
public java.lang.String getThingGroupIndexingMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.internalValue"></a>

```java
public IotIndexingConfigurationThingGroupIndexingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a>

---


### IotIndexingConfigurationThingIndexingConfigurationCustomFieldList <a name="IotIndexingConfigurationThingIndexingConfigurationCustomFieldList" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList;

new IotIndexingConfigurationThingIndexingConfigurationCustomFieldList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.get"></a>

```java
public IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a>>

---


### IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference <a name="IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference;

new IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a> OR com.hashicorp.cdktf.IResolvable

---


### IotIndexingConfigurationThingIndexingConfigurationManagedFieldList <a name="IotIndexingConfigurationThingIndexingConfigurationManagedFieldList" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList;

new IotIndexingConfigurationThingIndexingConfigurationManagedFieldList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.get"></a>

```java
public IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a>>

---


### IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference <a name="IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference;

new IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a> OR com.hashicorp.cdktf.IResolvable

---


### IotIndexingConfigurationThingIndexingConfigurationOutputReference <a name="IotIndexingConfigurationThingIndexingConfigurationOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_indexing_configuration.IotIndexingConfigurationThingIndexingConfigurationOutputReference;

new IotIndexingConfigurationThingIndexingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putCustomField">putCustomField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putManagedField">putManagedField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetCustomField">resetCustomField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetDeviceDefenderIndexingMode">resetDeviceDefenderIndexingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetManagedField">resetManagedField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetNamedShadowIndexingMode">resetNamedShadowIndexingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetThingConnectivityIndexingMode">resetThingConnectivityIndexingMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomField` <a name="putCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putCustomField"></a>

```java
public void putCustomField(IResolvable OR java.util.List<IotIndexingConfigurationThingIndexingConfigurationCustomField> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putCustomField.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a>>

---

##### `putManagedField` <a name="putManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putManagedField"></a>

```java
public void putManagedField(IResolvable OR java.util.List<IotIndexingConfigurationThingIndexingConfigurationManagedField> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putManagedField.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a>>

---

##### `resetCustomField` <a name="resetCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetCustomField"></a>

```java
public void resetCustomField()
```

##### `resetDeviceDefenderIndexingMode` <a name="resetDeviceDefenderIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetDeviceDefenderIndexingMode"></a>

```java
public void resetDeviceDefenderIndexingMode()
```

##### `resetManagedField` <a name="resetManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetManagedField"></a>

```java
public void resetManagedField()
```

##### `resetNamedShadowIndexingMode` <a name="resetNamedShadowIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetNamedShadowIndexingMode"></a>

```java
public void resetNamedShadowIndexingMode()
```

##### `resetThingConnectivityIndexingMode` <a name="resetThingConnectivityIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetThingConnectivityIndexingMode"></a>

```java
public void resetThingConnectivityIndexingMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.customField">customField</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList">IotIndexingConfigurationThingIndexingConfigurationCustomFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.managedField">managedField</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList">IotIndexingConfigurationThingIndexingConfigurationManagedFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.customFieldInput">customFieldInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.deviceDefenderIndexingModeInput">deviceDefenderIndexingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.managedFieldInput">managedFieldInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.namedShadowIndexingModeInput">namedShadowIndexingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingConnectivityIndexingModeInput">thingConnectivityIndexingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingIndexingModeInput">thingIndexingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.deviceDefenderIndexingMode">deviceDefenderIndexingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.namedShadowIndexingMode">namedShadowIndexingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingConnectivityIndexingMode">thingConnectivityIndexingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingIndexingMode">thingIndexingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customField`<sup>Required</sup> <a name="customField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.customField"></a>

```java
public IotIndexingConfigurationThingIndexingConfigurationCustomFieldList getCustomField();
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList">IotIndexingConfigurationThingIndexingConfigurationCustomFieldList</a>

---

##### `managedField`<sup>Required</sup> <a name="managedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.managedField"></a>

```java
public IotIndexingConfigurationThingIndexingConfigurationManagedFieldList getManagedField();
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList">IotIndexingConfigurationThingIndexingConfigurationManagedFieldList</a>

---

##### `customFieldInput`<sup>Optional</sup> <a name="customFieldInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.customFieldInput"></a>

```java
public java.lang.Object getCustomFieldInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a>>

---

##### `deviceDefenderIndexingModeInput`<sup>Optional</sup> <a name="deviceDefenderIndexingModeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.deviceDefenderIndexingModeInput"></a>

```java
public java.lang.String getDeviceDefenderIndexingModeInput();
```

- *Type:* java.lang.String

---

##### `managedFieldInput`<sup>Optional</sup> <a name="managedFieldInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.managedFieldInput"></a>

```java
public java.lang.Object getManagedFieldInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a>>

---

##### `namedShadowIndexingModeInput`<sup>Optional</sup> <a name="namedShadowIndexingModeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.namedShadowIndexingModeInput"></a>

```java
public java.lang.String getNamedShadowIndexingModeInput();
```

- *Type:* java.lang.String

---

##### `thingConnectivityIndexingModeInput`<sup>Optional</sup> <a name="thingConnectivityIndexingModeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingConnectivityIndexingModeInput"></a>

```java
public java.lang.String getThingConnectivityIndexingModeInput();
```

- *Type:* java.lang.String

---

##### `thingIndexingModeInput`<sup>Optional</sup> <a name="thingIndexingModeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingIndexingModeInput"></a>

```java
public java.lang.String getThingIndexingModeInput();
```

- *Type:* java.lang.String

---

##### `deviceDefenderIndexingMode`<sup>Required</sup> <a name="deviceDefenderIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.deviceDefenderIndexingMode"></a>

```java
public java.lang.String getDeviceDefenderIndexingMode();
```

- *Type:* java.lang.String

---

##### `namedShadowIndexingMode`<sup>Required</sup> <a name="namedShadowIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.namedShadowIndexingMode"></a>

```java
public java.lang.String getNamedShadowIndexingMode();
```

- *Type:* java.lang.String

---

##### `thingConnectivityIndexingMode`<sup>Required</sup> <a name="thingConnectivityIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingConnectivityIndexingMode"></a>

```java
public java.lang.String getThingConnectivityIndexingMode();
```

- *Type:* java.lang.String

---

##### `thingIndexingMode`<sup>Required</sup> <a name="thingIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingIndexingMode"></a>

```java
public java.lang.String getThingIndexingMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.internalValue"></a>

```java
public IotIndexingConfigurationThingIndexingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a>

---



