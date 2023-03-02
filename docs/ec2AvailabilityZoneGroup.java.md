# `ec2AvailabilityZoneGroup` Submodule <a name="`ec2AvailabilityZoneGroup` Submodule" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2AvailabilityZoneGroup <a name="Ec2AvailabilityZoneGroup" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group aws_ec2_availability_zone_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_availability_zone_group.Ec2AvailabilityZoneGroup;

Ec2AvailabilityZoneGroup.Builder.create(Construct scope, java.lang.String id)
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
    .groupName(java.lang.String)
    .optInStatus(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.groupName">groupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group#group_name Ec2AvailabilityZoneGroup#group_name}. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.optInStatus">optInStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group#opt_in_status Ec2AvailabilityZoneGroup#opt_in_status}. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group#id Ec2AvailabilityZoneGroup#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.groupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group#group_name Ec2AvailabilityZoneGroup#group_name}.

---

##### `optInStatus`<sup>Required</sup> <a name="optInStatus" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.optInStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group#opt_in_status Ec2AvailabilityZoneGroup#opt_in_status}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group#id Ec2AvailabilityZoneGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_availability_zone_group.Ec2AvailabilityZoneGroup;

Ec2AvailabilityZoneGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_availability_zone_group.Ec2AvailabilityZoneGroup;

Ec2AvailabilityZoneGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_availability_zone_group.Ec2AvailabilityZoneGroup;

Ec2AvailabilityZoneGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.optInStatusInput">optInStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.optInStatus">optInStatus</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `optInStatusInput`<sup>Optional</sup> <a name="optInStatusInput" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.optInStatusInput"></a>

```java
public java.lang.String getOptInStatusInput();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `optInStatus`<sup>Required</sup> <a name="optInStatus" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.optInStatus"></a>

```java
public java.lang.String getOptInStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2AvailabilityZoneGroupConfig <a name="Ec2AvailabilityZoneGroupConfig" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_availability_zone_group.Ec2AvailabilityZoneGroupConfig;

Ec2AvailabilityZoneGroupConfig.builder()
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
    .groupName(java.lang.String)
    .optInStatus(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.groupName">groupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group#group_name Ec2AvailabilityZoneGroup#group_name}. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.optInStatus">optInStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group#opt_in_status Ec2AvailabilityZoneGroup#opt_in_status}. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group#id Ec2AvailabilityZoneGroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group#group_name Ec2AvailabilityZoneGroup#group_name}.

---

##### `optInStatus`<sup>Required</sup> <a name="optInStatus" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.optInStatus"></a>

```java
public java.lang.String getOptInStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group#opt_in_status Ec2AvailabilityZoneGroup#opt_in_status}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group#id Ec2AvailabilityZoneGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



