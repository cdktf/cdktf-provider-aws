# `appmeshVirtualRouter` Submodule <a name="`appmeshVirtualRouter` Submodule" id="@cdktf/provider-aws.appmeshVirtualRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshVirtualRouter <a name="AppmeshVirtualRouter" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router aws_appmesh_virtual_router}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_router.AppmeshVirtualRouter;

AppmeshVirtualRouter.Builder.create(Construct scope, java.lang.String id)
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
    .meshName(java.lang.String)
    .name(java.lang.String)
    .spec(AppmeshVirtualRouterSpec)
//  .id(java.lang.String)
//  .meshOwner(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.meshName">meshName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#mesh_name AppmeshVirtualRouter#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#name AppmeshVirtualRouter#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#id AppmeshVirtualRouter#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.meshOwner">meshOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#mesh_owner AppmeshVirtualRouter#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#tags AppmeshVirtualRouter#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#tags_all AppmeshVirtualRouter#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.meshName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#mesh_name AppmeshVirtualRouter#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#name AppmeshVirtualRouter#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#spec AppmeshVirtualRouter#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#id AppmeshVirtualRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshOwner`<sup>Optional</sup> <a name="meshOwner" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.meshOwner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#mesh_owner AppmeshVirtualRouter#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#tags AppmeshVirtualRouter#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#tags_all AppmeshVirtualRouter#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetMeshOwner">resetMeshOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.putSpec"></a>

```java
public void putSpec(AppmeshVirtualRouterSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetId"></a>

```java
public void resetId()
```

##### `resetMeshOwner` <a name="resetMeshOwner" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetMeshOwner"></a>

```java
public void resetMeshOwner()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_router.AppmeshVirtualRouter;

AppmeshVirtualRouter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_router.AppmeshVirtualRouter;

AppmeshVirtualRouter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_router.AppmeshVirtualRouter;

AppmeshVirtualRouter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.resourceOwner">resourceOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference">AppmeshVirtualRouterSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshNameInput">meshNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshOwnerInput">meshOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshName">meshName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshOwner">meshOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.lastUpdatedDate"></a>

```java
public java.lang.String getLastUpdatedDate();
```

- *Type:* java.lang.String

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.resourceOwner"></a>

```java
public java.lang.String getResourceOwner();
```

- *Type:* java.lang.String

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.spec"></a>

```java
public AppmeshVirtualRouterSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference">AppmeshVirtualRouterSpecOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `meshNameInput`<sup>Optional</sup> <a name="meshNameInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshNameInput"></a>

```java
public java.lang.String getMeshNameInput();
```

- *Type:* java.lang.String

---

##### `meshOwnerInput`<sup>Optional</sup> <a name="meshOwnerInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshOwnerInput"></a>

```java
public java.lang.String getMeshOwnerInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.specInput"></a>

```java
public AppmeshVirtualRouterSpec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshName"></a>

```java
public java.lang.String getMeshName();
```

- *Type:* java.lang.String

---

##### `meshOwner`<sup>Required</sup> <a name="meshOwner" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshOwner"></a>

```java
public java.lang.String getMeshOwner();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshVirtualRouterConfig <a name="AppmeshVirtualRouterConfig" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_router.AppmeshVirtualRouterConfig;

AppmeshVirtualRouterConfig.builder()
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
    .meshName(java.lang.String)
    .name(java.lang.String)
    .spec(AppmeshVirtualRouterSpec)
//  .id(java.lang.String)
//  .meshOwner(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.meshName">meshName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#mesh_name AppmeshVirtualRouter#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#name AppmeshVirtualRouter#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#id AppmeshVirtualRouter#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.meshOwner">meshOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#mesh_owner AppmeshVirtualRouter#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#tags AppmeshVirtualRouter#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#tags_all AppmeshVirtualRouter#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.meshName"></a>

```java
public java.lang.String getMeshName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#mesh_name AppmeshVirtualRouter#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#name AppmeshVirtualRouter#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.spec"></a>

```java
public AppmeshVirtualRouterSpec getSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#spec AppmeshVirtualRouter#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#id AppmeshVirtualRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshOwner`<sup>Optional</sup> <a name="meshOwner" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.meshOwner"></a>

```java
public java.lang.String getMeshOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#mesh_owner AppmeshVirtualRouter#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#tags AppmeshVirtualRouter#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#tags_all AppmeshVirtualRouter#tags_all}.

---

### AppmeshVirtualRouterSpec <a name="AppmeshVirtualRouterSpec" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_router.AppmeshVirtualRouterSpec;

AppmeshVirtualRouterSpec.builder()
    .listener(IResolvable)
    .listener(java.util.List<AppmeshVirtualRouterSpecListener>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec.property.listener">listener</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a>></code> | listener block. |

---

##### `listener`<sup>Required</sup> <a name="listener" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec.property.listener"></a>

```java
public java.lang.Object getListener();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a>>

listener block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#listener AppmeshVirtualRouter#listener}

---

### AppmeshVirtualRouterSpecListener <a name="AppmeshVirtualRouterSpecListener" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_router.AppmeshVirtualRouterSpecListener;

AppmeshVirtualRouterSpecListener.builder()
    .portMapping(AppmeshVirtualRouterSpecListenerPortMapping)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener.property.portMapping">portMapping</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a></code> | port_mapping block. |

---

##### `portMapping`<sup>Required</sup> <a name="portMapping" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener.property.portMapping"></a>

```java
public AppmeshVirtualRouterSpecListenerPortMapping getPortMapping();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a>

port_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#port_mapping AppmeshVirtualRouter#port_mapping}

---

### AppmeshVirtualRouterSpecListenerPortMapping <a name="AppmeshVirtualRouterSpecListenerPortMapping" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_router.AppmeshVirtualRouterSpecListenerPortMapping;

AppmeshVirtualRouterSpecListenerPortMapping.builder()
    .port(java.lang.Number)
    .protocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#port AppmeshVirtualRouter#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#protocol AppmeshVirtualRouter#protocol}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#port AppmeshVirtualRouter#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#protocol AppmeshVirtualRouter#protocol}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshVirtualRouterSpecListenerList <a name="AppmeshVirtualRouterSpecListenerList" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_router.AppmeshVirtualRouterSpecListenerList;

new AppmeshVirtualRouterSpecListenerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.get"></a>

```java
public AppmeshVirtualRouterSpecListenerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a>>

---


### AppmeshVirtualRouterSpecListenerOutputReference <a name="AppmeshVirtualRouterSpecListenerOutputReference" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_router.AppmeshVirtualRouterSpecListenerOutputReference;

new AppmeshVirtualRouterSpecListenerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.putPortMapping">putPortMapping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPortMapping` <a name="putPortMapping" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.putPortMapping"></a>

```java
public void putPortMapping(AppmeshVirtualRouterSpecListenerPortMapping value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.putPortMapping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.portMapping">portMapping</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference">AppmeshVirtualRouterSpecListenerPortMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.portMappingInput">portMappingInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portMapping`<sup>Required</sup> <a name="portMapping" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.portMapping"></a>

```java
public AppmeshVirtualRouterSpecListenerPortMappingOutputReference getPortMapping();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference">AppmeshVirtualRouterSpecListenerPortMappingOutputReference</a>

---

##### `portMappingInput`<sup>Optional</sup> <a name="portMappingInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.portMappingInput"></a>

```java
public AppmeshVirtualRouterSpecListenerPortMapping getPortMappingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a> OR com.hashicorp.cdktf.IResolvable

---


### AppmeshVirtualRouterSpecListenerPortMappingOutputReference <a name="AppmeshVirtualRouterSpecListenerPortMappingOutputReference" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_router.AppmeshVirtualRouterSpecListenerPortMappingOutputReference;

new AppmeshVirtualRouterSpecListenerPortMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualRouterSpecListenerPortMapping getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a>

---


### AppmeshVirtualRouterSpecOutputReference <a name="AppmeshVirtualRouterSpecOutputReference" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_router.AppmeshVirtualRouterSpecOutputReference;

new AppmeshVirtualRouterSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.putListener">putListener</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putListener` <a name="putListener" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.putListener"></a>

```java
public void putListener(IResolvable OR java.util.List<AppmeshVirtualRouterSpecListener> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.putListener.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.listener">listener</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList">AppmeshVirtualRouterSpecListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.listenerInput">listenerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `listener`<sup>Required</sup> <a name="listener" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.listener"></a>

```java
public AppmeshVirtualRouterSpecListenerList getListener();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList">AppmeshVirtualRouterSpecListenerList</a>

---

##### `listenerInput`<sup>Optional</sup> <a name="listenerInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.listenerInput"></a>

```java
public java.lang.Object getListenerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualRouterSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a>

---



