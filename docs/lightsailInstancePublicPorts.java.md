# `lightsailInstancePublicPorts` Submodule <a name="`lightsailInstancePublicPorts` Submodule" id="@cdktf/provider-aws.lightsailInstancePublicPorts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailInstancePublicPorts <a name="LightsailInstancePublicPorts" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports aws_lightsail_instance_public_ports}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_instance_public_ports.LightsailInstancePublicPorts;

LightsailInstancePublicPorts.Builder.create(Construct scope, java.lang.String id)
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
    .instanceName(java.lang.String)
    .portInfo(IResolvable)
    .portInfo(java.util.List<LightsailInstancePublicPortsPortInfo>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.instanceName">instanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#instance_name LightsailInstancePublicPorts#instance_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.portInfo">portInfo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>></code> | port_info block. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#id LightsailInstancePublicPorts#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.instanceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#instance_name LightsailInstancePublicPorts#instance_name}.

---

##### `portInfo`<sup>Required</sup> <a name="portInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.portInfo"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>>

port_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#port_info LightsailInstancePublicPorts#port_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#id LightsailInstancePublicPorts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.putPortInfo">putPortInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPortInfo` <a name="putPortInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.putPortInfo"></a>

```java
public void putPortInfo(IResolvable OR java.util.List<LightsailInstancePublicPortsPortInfo> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.putPortInfo.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_instance_public_ports.LightsailInstancePublicPorts;

LightsailInstancePublicPorts.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_instance_public_ports.LightsailInstancePublicPorts;

LightsailInstancePublicPorts.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_instance_public_ports.LightsailInstancePublicPorts;

LightsailInstancePublicPorts.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfo">portInfo</a></code> | <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList">LightsailInstancePublicPortsPortInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceNameInput">instanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfoInput">portInfoInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `portInfo`<sup>Required</sup> <a name="portInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfo"></a>

```java
public LightsailInstancePublicPortsPortInfoList getPortInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList">LightsailInstancePublicPortsPortInfoList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceNameInput"></a>

```java
public java.lang.String getInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `portInfoInput`<sup>Optional</sup> <a name="portInfoInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfoInput"></a>

```java
public java.lang.Object getPortInfoInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailInstancePublicPortsConfig <a name="LightsailInstancePublicPortsConfig" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_instance_public_ports.LightsailInstancePublicPortsConfig;

LightsailInstancePublicPortsConfig.builder()
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
    .instanceName(java.lang.String)
    .portInfo(IResolvable)
    .portInfo(java.util.List<LightsailInstancePublicPortsPortInfo>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#instance_name LightsailInstancePublicPorts#instance_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.portInfo">portInfo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>></code> | port_info block. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#id LightsailInstancePublicPorts#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#instance_name LightsailInstancePublicPorts#instance_name}.

---

##### `portInfo`<sup>Required</sup> <a name="portInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.portInfo"></a>

```java
public java.lang.Object getPortInfo();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>>

port_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#port_info LightsailInstancePublicPorts#port_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#id LightsailInstancePublicPorts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LightsailInstancePublicPortsPortInfo <a name="LightsailInstancePublicPortsPortInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_instance_public_ports.LightsailInstancePublicPortsPortInfo;

LightsailInstancePublicPortsPortInfo.builder()
    .fromPort(java.lang.Number)
    .protocol(java.lang.String)
    .toPort(java.lang.Number)
//  .cidrListAliases(java.util.List<java.lang.String>)
//  .cidrs(java.util.List<java.lang.String>)
//  .ipv6Cidrs(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#from_port LightsailInstancePublicPorts#from_port}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#protocol LightsailInstancePublicPorts#protocol}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#to_port LightsailInstancePublicPorts#to_port}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrListAliases">cidrListAliases</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidr_list_aliases LightsailInstancePublicPorts#cidr_list_aliases}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrs">cidrs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidrs LightsailInstancePublicPorts#cidrs}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.ipv6Cidrs">ipv6Cidrs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#ipv6_cidrs LightsailInstancePublicPorts#ipv6_cidrs}. |

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#from_port LightsailInstancePublicPorts#from_port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#protocol LightsailInstancePublicPorts#protocol}.

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#to_port LightsailInstancePublicPorts#to_port}.

---

##### `cidrListAliases`<sup>Optional</sup> <a name="cidrListAliases" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrListAliases"></a>

```java
public java.util.List<java.lang.String> getCidrListAliases();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidr_list_aliases LightsailInstancePublicPorts#cidr_list_aliases}.

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrs"></a>

```java
public java.util.List<java.lang.String> getCidrs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidrs LightsailInstancePublicPorts#cidrs}.

---

##### `ipv6Cidrs`<sup>Optional</sup> <a name="ipv6Cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.ipv6Cidrs"></a>

```java
public java.util.List<java.lang.String> getIpv6Cidrs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#ipv6_cidrs LightsailInstancePublicPorts#ipv6_cidrs}.

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailInstancePublicPortsPortInfoList <a name="LightsailInstancePublicPortsPortInfoList" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_instance_public_ports.LightsailInstancePublicPortsPortInfoList;

new LightsailInstancePublicPortsPortInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.get"></a>

```java
public LightsailInstancePublicPortsPortInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>>

---


### LightsailInstancePublicPortsPortInfoOutputReference <a name="LightsailInstancePublicPortsPortInfoOutputReference" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_instance_public_ports.LightsailInstancePublicPortsPortInfoOutputReference;

new LightsailInstancePublicPortsPortInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrListAliases">resetCidrListAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrs">resetCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetIpv6Cidrs">resetIpv6Cidrs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrListAliases` <a name="resetCidrListAliases" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrListAliases"></a>

```java
public void resetCidrListAliases()
```

##### `resetCidrs` <a name="resetCidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrs"></a>

```java
public void resetCidrs()
```

##### `resetIpv6Cidrs` <a name="resetIpv6Cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetIpv6Cidrs"></a>

```java
public void resetIpv6Cidrs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliasesInput">cidrListAliasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrsInput">cidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6CidrsInput">ipv6CidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPortInput">toPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliases">cidrListAliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrs">cidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6Cidrs">ipv6Cidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrListAliasesInput`<sup>Optional</sup> <a name="cidrListAliasesInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliasesInput"></a>

```java
public java.util.List<java.lang.String> getCidrListAliasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cidrsInput`<sup>Optional</sup> <a name="cidrsInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrsInput"></a>

```java
public java.util.List<java.lang.String> getCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPortInput"></a>

```java
public java.lang.Number getFromPortInput();
```

- *Type:* java.lang.Number

---

##### `ipv6CidrsInput`<sup>Optional</sup> <a name="ipv6CidrsInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6CidrsInput"></a>

```java
public java.util.List<java.lang.String> getIpv6CidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPortInput"></a>

```java
public java.lang.Number getToPortInput();
```

- *Type:* java.lang.Number

---

##### `cidrListAliases`<sup>Required</sup> <a name="cidrListAliases" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliases"></a>

```java
public java.util.List<java.lang.String> getCidrListAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrs"></a>

```java
public java.util.List<java.lang.String> getCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

---

##### `ipv6Cidrs`<sup>Required</sup> <a name="ipv6Cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6Cidrs"></a>

```java
public java.util.List<java.lang.String> getIpv6Cidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a> OR com.hashicorp.cdktf.IResolvable

---



