# `connectUserHierarchyStructure` Submodule <a name="`connectUserHierarchyStructure` Submodule" id="@cdktf/provider-aws.connectUserHierarchyStructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUserHierarchyStructure <a name="ConnectUserHierarchyStructure" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure aws_connect_user_hierarchy_structure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_user_hierarchy_structure.ConnectUserHierarchyStructure;

ConnectUserHierarchyStructure.Builder.create(Construct scope, java.lang.String id)
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
    .hierarchyStructure(ConnectUserHierarchyStructureHierarchyStructure)
    .instanceId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.hierarchyStructure">hierarchyStructure</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a></code> | hierarchy_structure block. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#instance_id ConnectUserHierarchyStructure#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#id ConnectUserHierarchyStructure#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hierarchyStructure`<sup>Required</sup> <a name="hierarchyStructure" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.hierarchyStructure"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a>

hierarchy_structure block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#hierarchy_structure ConnectUserHierarchyStructure#hierarchy_structure}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#instance_id ConnectUserHierarchyStructure#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#id ConnectUserHierarchyStructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putHierarchyStructure">putHierarchyStructure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putHierarchyStructure` <a name="putHierarchyStructure" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putHierarchyStructure"></a>

```java
public void putHierarchyStructure(ConnectUserHierarchyStructureHierarchyStructure value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putHierarchyStructure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_user_hierarchy_structure.ConnectUserHierarchyStructure;

ConnectUserHierarchyStructure.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_user_hierarchy_structure.ConnectUserHierarchyStructure;

ConnectUserHierarchyStructure.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_user_hierarchy_structure.ConnectUserHierarchyStructure;

ConnectUserHierarchyStructure.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.hierarchyStructure">hierarchyStructure</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference">ConnectUserHierarchyStructureHierarchyStructureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.hierarchyStructureInput">hierarchyStructureInput</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hierarchyStructure`<sup>Required</sup> <a name="hierarchyStructure" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.hierarchyStructure"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureOutputReference getHierarchyStructure();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference">ConnectUserHierarchyStructureHierarchyStructureOutputReference</a>

---

##### `hierarchyStructureInput`<sup>Optional</sup> <a name="hierarchyStructureInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.hierarchyStructureInput"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructure getHierarchyStructureInput();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserHierarchyStructureConfig <a name="ConnectUserHierarchyStructureConfig" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_user_hierarchy_structure.ConnectUserHierarchyStructureConfig;

ConnectUserHierarchyStructureConfig.builder()
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
    .hierarchyStructure(ConnectUserHierarchyStructureHierarchyStructure)
    .instanceId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.hierarchyStructure">hierarchyStructure</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a></code> | hierarchy_structure block. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#instance_id ConnectUserHierarchyStructure#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#id ConnectUserHierarchyStructure#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hierarchyStructure`<sup>Required</sup> <a name="hierarchyStructure" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.hierarchyStructure"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructure getHierarchyStructure();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a>

hierarchy_structure block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#hierarchy_structure ConnectUserHierarchyStructure#hierarchy_structure}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#instance_id ConnectUserHierarchyStructure#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#id ConnectUserHierarchyStructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectUserHierarchyStructureHierarchyStructure <a name="ConnectUserHierarchyStructureHierarchyStructure" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_user_hierarchy_structure.ConnectUserHierarchyStructureHierarchyStructure;

ConnectUserHierarchyStructureHierarchyStructure.builder()
//  .levelFive(ConnectUserHierarchyStructureHierarchyStructureLevelFive)
//  .levelFour(ConnectUserHierarchyStructureHierarchyStructureLevelFour)
//  .levelOne(ConnectUserHierarchyStructureHierarchyStructureLevelOne)
//  .levelThree(ConnectUserHierarchyStructureHierarchyStructureLevelThree)
//  .levelTwo(ConnectUserHierarchyStructureHierarchyStructureLevelTwo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelFive">levelFive</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a></code> | level_five block. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelFour">levelFour</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a></code> | level_four block. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelOne">levelOne</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a></code> | level_one block. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelThree">levelThree</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a></code> | level_three block. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelTwo">levelTwo</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a></code> | level_two block. |

---

##### `levelFive`<sup>Optional</sup> <a name="levelFive" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelFive"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelFive getLevelFive();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a>

level_five block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_five ConnectUserHierarchyStructure#level_five}

---

##### `levelFour`<sup>Optional</sup> <a name="levelFour" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelFour"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelFour getLevelFour();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a>

level_four block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_four ConnectUserHierarchyStructure#level_four}

---

##### `levelOne`<sup>Optional</sup> <a name="levelOne" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelOne"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelOne getLevelOne();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a>

level_one block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_one ConnectUserHierarchyStructure#level_one}

---

##### `levelThree`<sup>Optional</sup> <a name="levelThree" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelThree"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelThree getLevelThree();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a>

level_three block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_three ConnectUserHierarchyStructure#level_three}

---

##### `levelTwo`<sup>Optional</sup> <a name="levelTwo" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelTwo"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelTwo getLevelTwo();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a>

level_two block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_two ConnectUserHierarchyStructure#level_two}

---

### ConnectUserHierarchyStructureHierarchyStructureLevelFive <a name="ConnectUserHierarchyStructureHierarchyStructureLevelFive" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_user_hierarchy_structure.ConnectUserHierarchyStructureHierarchyStructureLevelFive;

ConnectUserHierarchyStructureHierarchyStructureLevelFive.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

### ConnectUserHierarchyStructureHierarchyStructureLevelFour <a name="ConnectUserHierarchyStructureHierarchyStructureLevelFour" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_user_hierarchy_structure.ConnectUserHierarchyStructureHierarchyStructureLevelFour;

ConnectUserHierarchyStructureHierarchyStructureLevelFour.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

### ConnectUserHierarchyStructureHierarchyStructureLevelOne <a name="ConnectUserHierarchyStructureHierarchyStructureLevelOne" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_user_hierarchy_structure.ConnectUserHierarchyStructureHierarchyStructureLevelOne;

ConnectUserHierarchyStructureHierarchyStructureLevelOne.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

### ConnectUserHierarchyStructureHierarchyStructureLevelThree <a name="ConnectUserHierarchyStructureHierarchyStructureLevelThree" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_user_hierarchy_structure.ConnectUserHierarchyStructureHierarchyStructureLevelThree;

ConnectUserHierarchyStructureHierarchyStructureLevelThree.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

### ConnectUserHierarchyStructureHierarchyStructureLevelTwo <a name="ConnectUserHierarchyStructureHierarchyStructureLevelTwo" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_user_hierarchy_structure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo;

ConnectUserHierarchyStructureHierarchyStructureLevelTwo.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_user_hierarchy_structure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference;

new ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.internalValue"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelFive getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a>

---


### ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_user_hierarchy_structure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference;

new ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.internalValue"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelFour getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a>

---


### ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_user_hierarchy_structure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference;

new ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.internalValue"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelOne getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a>

---


### ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_user_hierarchy_structure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference;

new ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.internalValue"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelThree getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a>

---


### ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_user_hierarchy_structure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference;

new ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.internalValue"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelTwo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a>

---


### ConnectUserHierarchyStructureHierarchyStructureOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_user_hierarchy_structure.ConnectUserHierarchyStructureHierarchyStructureOutputReference;

new ConnectUserHierarchyStructureHierarchyStructureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFive">putLevelFive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFour">putLevelFour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelOne">putLevelOne</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelThree">putLevelThree</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelTwo">putLevelTwo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelFive">resetLevelFive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelFour">resetLevelFour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelOne">resetLevelOne</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelThree">resetLevelThree</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelTwo">resetLevelTwo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLevelFive` <a name="putLevelFive" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFive"></a>

```java
public void putLevelFive(ConnectUserHierarchyStructureHierarchyStructureLevelFive value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a>

---

##### `putLevelFour` <a name="putLevelFour" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFour"></a>

```java
public void putLevelFour(ConnectUserHierarchyStructureHierarchyStructureLevelFour value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFour.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a>

---

##### `putLevelOne` <a name="putLevelOne" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelOne"></a>

```java
public void putLevelOne(ConnectUserHierarchyStructureHierarchyStructureLevelOne value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelOne.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a>

---

##### `putLevelThree` <a name="putLevelThree" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelThree"></a>

```java
public void putLevelThree(ConnectUserHierarchyStructureHierarchyStructureLevelThree value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelThree.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a>

---

##### `putLevelTwo` <a name="putLevelTwo" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelTwo"></a>

```java
public void putLevelTwo(ConnectUserHierarchyStructureHierarchyStructureLevelTwo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelTwo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a>

---

##### `resetLevelFive` <a name="resetLevelFive" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelFive"></a>

```java
public void resetLevelFive()
```

##### `resetLevelFour` <a name="resetLevelFour" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelFour"></a>

```java
public void resetLevelFour()
```

##### `resetLevelOne` <a name="resetLevelOne" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelOne"></a>

```java
public void resetLevelOne()
```

##### `resetLevelThree` <a name="resetLevelThree" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelThree"></a>

```java
public void resetLevelThree()
```

##### `resetLevelTwo` <a name="resetLevelTwo" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelTwo"></a>

```java
public void resetLevelTwo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFive">levelFive</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFour">levelFour</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelOne">levelOne</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelThree">levelThree</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelTwo">levelTwo</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFiveInput">levelFiveInput</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFourInput">levelFourInput</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelOneInput">levelOneInput</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelThreeInput">levelThreeInput</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelTwoInput">levelTwoInput</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `levelFive`<sup>Required</sup> <a name="levelFive" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFive"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference getLevelFive();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference</a>

---

##### `levelFour`<sup>Required</sup> <a name="levelFour" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFour"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference getLevelFour();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference</a>

---

##### `levelOne`<sup>Required</sup> <a name="levelOne" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelOne"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference getLevelOne();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference</a>

---

##### `levelThree`<sup>Required</sup> <a name="levelThree" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelThree"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference getLevelThree();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference</a>

---

##### `levelTwo`<sup>Required</sup> <a name="levelTwo" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelTwo"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference getLevelTwo();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference</a>

---

##### `levelFiveInput`<sup>Optional</sup> <a name="levelFiveInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFiveInput"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelFive getLevelFiveInput();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a>

---

##### `levelFourInput`<sup>Optional</sup> <a name="levelFourInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFourInput"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelFour getLevelFourInput();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a>

---

##### `levelOneInput`<sup>Optional</sup> <a name="levelOneInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelOneInput"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelOne getLevelOneInput();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a>

---

##### `levelThreeInput`<sup>Optional</sup> <a name="levelThreeInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelThreeInput"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelThree getLevelThreeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a>

---

##### `levelTwoInput`<sup>Optional</sup> <a name="levelTwoInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelTwoInput"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructureLevelTwo getLevelTwoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.internalValue"></a>

```java
public ConnectUserHierarchyStructureHierarchyStructure getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a>

---



