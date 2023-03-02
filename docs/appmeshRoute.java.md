# `appmeshRoute` Submodule <a name="`appmeshRoute` Submodule" id="@cdktf/provider-aws.appmeshRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshRoute <a name="AppmeshRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route aws_appmesh_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRoute;

AppmeshRoute.Builder.create(Construct scope, java.lang.String id)
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
    .spec(AppmeshRouteSpec)
    .virtualRouterName(java.lang.String)
//  .id(java.lang.String)
//  .meshOwner(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.meshName">meshName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_name AppmeshRoute#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.virtualRouterName">virtualRouterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_router_name AppmeshRoute#virtual_router_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#id AppmeshRoute#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.meshOwner">meshOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_owner AppmeshRoute#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags AppmeshRoute#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags_all AppmeshRoute#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.meshName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_name AppmeshRoute#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#spec AppmeshRoute#spec}

---

##### `virtualRouterName`<sup>Required</sup> <a name="virtualRouterName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.virtualRouterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_router_name AppmeshRoute#virtual_router_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#id AppmeshRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshOwner`<sup>Optional</sup> <a name="meshOwner" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.meshOwner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_owner AppmeshRoute#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags AppmeshRoute#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags_all AppmeshRoute#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetMeshOwner">resetMeshOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.putSpec"></a>

```java
public void putSpec(AppmeshRouteSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetId"></a>

```java
public void resetId()
```

##### `resetMeshOwner` <a name="resetMeshOwner" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetMeshOwner"></a>

```java
public void resetMeshOwner()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRoute;

AppmeshRoute.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRoute;

AppmeshRoute.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRoute;

AppmeshRoute.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.resourceOwner">resourceOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference">AppmeshRouteSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshNameInput">meshNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshOwnerInput">meshOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.virtualRouterNameInput">virtualRouterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshName">meshName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshOwner">meshOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.virtualRouterName">virtualRouterName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.lastUpdatedDate"></a>

```java
public java.lang.String getLastUpdatedDate();
```

- *Type:* java.lang.String

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.resourceOwner"></a>

```java
public java.lang.String getResourceOwner();
```

- *Type:* java.lang.String

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.spec"></a>

```java
public AppmeshRouteSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference">AppmeshRouteSpecOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `meshNameInput`<sup>Optional</sup> <a name="meshNameInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshNameInput"></a>

```java
public java.lang.String getMeshNameInput();
```

- *Type:* java.lang.String

---

##### `meshOwnerInput`<sup>Optional</sup> <a name="meshOwnerInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshOwnerInput"></a>

```java
public java.lang.String getMeshOwnerInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.specInput"></a>

```java
public AppmeshRouteSpec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualRouterNameInput`<sup>Optional</sup> <a name="virtualRouterNameInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.virtualRouterNameInput"></a>

```java
public java.lang.String getVirtualRouterNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshName"></a>

```java
public java.lang.String getMeshName();
```

- *Type:* java.lang.String

---

##### `meshOwner`<sup>Required</sup> <a name="meshOwner" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshOwner"></a>

```java
public java.lang.String getMeshOwner();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualRouterName`<sup>Required</sup> <a name="virtualRouterName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.virtualRouterName"></a>

```java
public java.lang.String getVirtualRouterName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshRouteConfig <a name="AppmeshRouteConfig" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteConfig;

AppmeshRouteConfig.builder()
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
    .spec(AppmeshRouteSpec)
    .virtualRouterName(java.lang.String)
//  .id(java.lang.String)
//  .meshOwner(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.meshName">meshName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_name AppmeshRoute#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.virtualRouterName">virtualRouterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_router_name AppmeshRoute#virtual_router_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#id AppmeshRoute#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.meshOwner">meshOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_owner AppmeshRoute#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags AppmeshRoute#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags_all AppmeshRoute#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.meshName"></a>

```java
public java.lang.String getMeshName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_name AppmeshRoute#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.spec"></a>

```java
public AppmeshRouteSpec getSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#spec AppmeshRoute#spec}

---

##### `virtualRouterName`<sup>Required</sup> <a name="virtualRouterName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.virtualRouterName"></a>

```java
public java.lang.String getVirtualRouterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_router_name AppmeshRoute#virtual_router_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#id AppmeshRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshOwner`<sup>Optional</sup> <a name="meshOwner" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.meshOwner"></a>

```java
public java.lang.String getMeshOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_owner AppmeshRoute#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags AppmeshRoute#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags_all AppmeshRoute#tags_all}.

---

### AppmeshRouteSpec <a name="AppmeshRouteSpec" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpec;

AppmeshRouteSpec.builder()
//  .grpcRoute(AppmeshRouteSpecGrpcRoute)
//  .http2Route(AppmeshRouteSpecHttp2Route)
//  .httpRoute(AppmeshRouteSpecHttpRoute)
//  .priority(java.lang.Number)
//  .tcpRoute(AppmeshRouteSpecTcpRoute)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.grpcRoute">grpcRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a></code> | grpc_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.http2Route">http2Route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a></code> | http2_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.httpRoute">httpRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a></code> | http_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#priority AppmeshRoute#priority}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.tcpRoute">tcpRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a></code> | tcp_route block. |

---

##### `grpcRoute`<sup>Optional</sup> <a name="grpcRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.grpcRoute"></a>

```java
public AppmeshRouteSpecGrpcRoute getGrpcRoute();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a>

grpc_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#grpc_route AppmeshRoute#grpc_route}

---

##### `http2Route`<sup>Optional</sup> <a name="http2Route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.http2Route"></a>

```java
public AppmeshRouteSpecHttp2Route getHttp2Route();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a>

http2_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http2_route AppmeshRoute#http2_route}

---

##### `httpRoute`<sup>Optional</sup> <a name="httpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.httpRoute"></a>

```java
public AppmeshRouteSpecHttpRoute getHttpRoute();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a>

http_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_route AppmeshRoute#http_route}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#priority AppmeshRoute#priority}.

---

##### `tcpRoute`<sup>Optional</sup> <a name="tcpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.tcpRoute"></a>

```java
public AppmeshRouteSpecTcpRoute getTcpRoute();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a>

tcp_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_route AppmeshRoute#tcp_route}

---

### AppmeshRouteSpecGrpcRoute <a name="AppmeshRouteSpecGrpcRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRoute;

AppmeshRouteSpecGrpcRoute.builder()
    .action(AppmeshRouteSpecGrpcRouteAction)
//  .match(AppmeshRouteSpecGrpcRouteMatch)
//  .retryPolicy(AppmeshRouteSpecGrpcRouteRetryPolicy)
//  .timeout(AppmeshRouteSpecGrpcRouteTimeout)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a></code> | timeout block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.action"></a>

```java
public AppmeshRouteSpecGrpcRouteAction getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.match"></a>

```java
public AppmeshRouteSpecGrpcRouteMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.retryPolicy"></a>

```java
public AppmeshRouteSpecGrpcRouteRetryPolicy getRetryPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#retry_policy AppmeshRoute#retry_policy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.timeout"></a>

```java
public AppmeshRouteSpecGrpcRouteTimeout getTimeout();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}

---

### AppmeshRouteSpecGrpcRouteAction <a name="AppmeshRouteSpecGrpcRouteAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteAction;

AppmeshRouteSpecGrpcRouteAction.builder()
    .weightedTarget(IResolvable)
    .weightedTarget(java.util.List<AppmeshRouteSpecGrpcRouteActionWeightedTarget>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction.property.weightedTarget">weightedTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>></code> | weighted_target block. |

---

##### `weightedTarget`<sup>Required</sup> <a name="weightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction.property.weightedTarget"></a>

```java
public java.lang.Object getWeightedTarget();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>>

weighted_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

### AppmeshRouteSpecGrpcRouteActionWeightedTarget <a name="AppmeshRouteSpecGrpcRouteActionWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteActionWeightedTarget;

AppmeshRouteSpecGrpcRouteActionWeightedTarget.builder()
    .virtualNode(java.lang.String)
    .weight(java.lang.Number)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.virtualNode">virtualNode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |

---

##### `virtualNode`<sup>Required</sup> <a name="virtualNode" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.virtualNode"></a>

```java
public java.lang.String getVirtualNode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

### AppmeshRouteSpecGrpcRouteMatch <a name="AppmeshRouteSpecGrpcRouteMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteMatch;

AppmeshRouteSpecGrpcRouteMatch.builder()
//  .metadata(IResolvable)
//  .metadata(java.util.List<AppmeshRouteSpecGrpcRouteMatchMetadata>)
//  .methodName(java.lang.String)
//  .port(java.lang.Number)
//  .prefix(java.lang.String)
//  .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>></code> | metadata block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.methodName">methodName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method_name AppmeshRoute#method_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#service_name AppmeshRoute#service_name}. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.metadata"></a>

```java
public java.lang.Object getMetadata();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#metadata AppmeshRoute#metadata}

---

##### `methodName`<sup>Optional</sup> <a name="methodName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.methodName"></a>

```java
public java.lang.String getMethodName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method_name AppmeshRoute#method_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#service_name AppmeshRoute#service_name}.

---

### AppmeshRouteSpecGrpcRouteMatchMetadata <a name="AppmeshRouteSpecGrpcRouteMatchMetadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteMatchMetadata;

AppmeshRouteSpecGrpcRouteMatchMetadata.builder()
    .name(java.lang.String)
//  .invert(java.lang.Boolean)
//  .invert(IResolvable)
//  .match(AppmeshRouteSpecGrpcRouteMatchMetadataMatch)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.invert">invert</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a></code> | match block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}.

---

##### `invert`<sup>Optional</sup> <a name="invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.invert"></a>

```java
public java.lang.Object getInvert();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.match"></a>

```java
public AppmeshRouteSpecGrpcRouteMatchMetadataMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

### AppmeshRouteSpecGrpcRouteMatchMetadataMatch <a name="AppmeshRouteSpecGrpcRouteMatchMetadataMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteMatchMetadataMatch;

AppmeshRouteSpecGrpcRouteMatchMetadataMatch.builder()
//  .exact(java.lang.String)
//  .prefix(java.lang.String)
//  .range(AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange)
//  .regex(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.exact">exact</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.range">range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.suffix">suffix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.range"></a>

```java
public AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange getRange();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a>

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#range AppmeshRoute#range}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}.

---

### AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange <a name="AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange;

AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.builder()
    .end(java.lang.Number)
    .start(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.property.end">end</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.property.start">start</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.property.end"></a>

```java
public java.lang.Number getEnd();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}.

---

### AppmeshRouteSpecGrpcRouteRetryPolicy <a name="AppmeshRouteSpecGrpcRouteRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteRetryPolicy;

AppmeshRouteSpecGrpcRouteRetryPolicy.builder()
    .maxRetries(java.lang.Number)
    .perRetryTimeout(AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout)
//  .grpcRetryEvents(java.util.List<java.lang.String>)
//  .httpRetryEvents(java.util.List<java.lang.String>)
//  .tcpRetryEvents(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.perRetryTimeout">perRetryTimeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a></code> | per_retry_timeout block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.grpcRetryEvents">grpcRetryEvents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#grpc_retry_events AppmeshRoute#grpc_retry_events}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.httpRetryEvents">httpRetryEvents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.tcpRetryEvents">tcpRetryEvents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}. |

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}.

---

##### `perRetryTimeout`<sup>Required</sup> <a name="perRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.perRetryTimeout"></a>

```java
public AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout getPerRetryTimeout();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a>

per_retry_timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}

---

##### `grpcRetryEvents`<sup>Optional</sup> <a name="grpcRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.grpcRetryEvents"></a>

```java
public java.util.List<java.lang.String> getGrpcRetryEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#grpc_retry_events AppmeshRoute#grpc_retry_events}.

---

##### `httpRetryEvents`<sup>Optional</sup> <a name="httpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.httpRetryEvents"></a>

```java
public java.util.List<java.lang.String> getHttpRetryEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}.

---

##### `tcpRetryEvents`<sup>Optional</sup> <a name="tcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.tcpRetryEvents"></a>

```java
public java.util.List<java.lang.String> getTcpRetryEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}.

---

### AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout <a name="AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout;

AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.builder()
    .unit(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecGrpcRouteTimeout <a name="AppmeshRouteSpecGrpcRouteTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteTimeout;

AppmeshRouteSpecGrpcRouteTimeout.builder()
//  .idle(AppmeshRouteSpecGrpcRouteTimeoutIdle)
//  .perRequest(AppmeshRouteSpecGrpcRouteTimeoutPerRequest)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.property.idle">idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a></code> | idle block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.property.perRequest">perRequest</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a></code> | per_request block. |

---

##### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.property.idle"></a>

```java
public AppmeshRouteSpecGrpcRouteTimeoutIdle getIdle();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}

---

##### `perRequest`<sup>Optional</sup> <a name="perRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.property.perRequest"></a>

```java
public AppmeshRouteSpecGrpcRouteTimeoutPerRequest getPerRequest();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a>

per_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_request AppmeshRoute#per_request}

---

### AppmeshRouteSpecGrpcRouteTimeoutIdle <a name="AppmeshRouteSpecGrpcRouteTimeoutIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteTimeoutIdle;

AppmeshRouteSpecGrpcRouteTimeoutIdle.builder()
    .unit(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecGrpcRouteTimeoutPerRequest <a name="AppmeshRouteSpecGrpcRouteTimeoutPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteTimeoutPerRequest;

AppmeshRouteSpecGrpcRouteTimeoutPerRequest.builder()
    .unit(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttp2Route <a name="AppmeshRouteSpecHttp2Route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2Route;

AppmeshRouteSpecHttp2Route.builder()
    .action(AppmeshRouteSpecHttp2RouteAction)
    .match(AppmeshRouteSpecHttp2RouteMatch)
//  .retryPolicy(AppmeshRouteSpecHttp2RouteRetryPolicy)
//  .timeout(AppmeshRouteSpecHttp2RouteTimeout)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a></code> | timeout block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.action"></a>

```java
public AppmeshRouteSpecHttp2RouteAction getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.match"></a>

```java
public AppmeshRouteSpecHttp2RouteMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.retryPolicy"></a>

```java
public AppmeshRouteSpecHttp2RouteRetryPolicy getRetryPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#retry_policy AppmeshRoute#retry_policy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.timeout"></a>

```java
public AppmeshRouteSpecHttp2RouteTimeout getTimeout();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}

---

### AppmeshRouteSpecHttp2RouteAction <a name="AppmeshRouteSpecHttp2RouteAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteAction;

AppmeshRouteSpecHttp2RouteAction.builder()
    .weightedTarget(IResolvable)
    .weightedTarget(java.util.List<AppmeshRouteSpecHttp2RouteActionWeightedTarget>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction.property.weightedTarget">weightedTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>></code> | weighted_target block. |

---

##### `weightedTarget`<sup>Required</sup> <a name="weightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction.property.weightedTarget"></a>

```java
public java.lang.Object getWeightedTarget();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>>

weighted_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

### AppmeshRouteSpecHttp2RouteActionWeightedTarget <a name="AppmeshRouteSpecHttp2RouteActionWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteActionWeightedTarget;

AppmeshRouteSpecHttp2RouteActionWeightedTarget.builder()
    .virtualNode(java.lang.String)
    .weight(java.lang.Number)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.virtualNode">virtualNode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |

---

##### `virtualNode`<sup>Required</sup> <a name="virtualNode" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.virtualNode"></a>

```java
public java.lang.String getVirtualNode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

### AppmeshRouteSpecHttp2RouteMatch <a name="AppmeshRouteSpecHttp2RouteMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteMatch;

AppmeshRouteSpecHttp2RouteMatch.builder()
    .prefix(java.lang.String)
//  .header(IResolvable)
//  .header(java.util.List<AppmeshRouteSpecHttp2RouteMatchHeader>)
//  .method(java.lang.String)
//  .port(java.lang.Number)
//  .scheme(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.method">method</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method AppmeshRoute#method}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.scheme">scheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#scheme AppmeshRoute#scheme}. |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>>

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#header AppmeshRoute#header}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method AppmeshRoute#method}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#scheme AppmeshRoute#scheme}.

---

### AppmeshRouteSpecHttp2RouteMatchHeader <a name="AppmeshRouteSpecHttp2RouteMatchHeader" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteMatchHeader;

AppmeshRouteSpecHttp2RouteMatchHeader.builder()
    .name(java.lang.String)
//  .invert(java.lang.Boolean)
//  .invert(IResolvable)
//  .match(AppmeshRouteSpecHttp2RouteMatchHeaderMatch)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.invert">invert</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a></code> | match block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}.

---

##### `invert`<sup>Optional</sup> <a name="invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.invert"></a>

```java
public java.lang.Object getInvert();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.match"></a>

```java
public AppmeshRouteSpecHttp2RouteMatchHeaderMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

### AppmeshRouteSpecHttp2RouteMatchHeaderMatch <a name="AppmeshRouteSpecHttp2RouteMatchHeaderMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteMatchHeaderMatch;

AppmeshRouteSpecHttp2RouteMatchHeaderMatch.builder()
//  .exact(java.lang.String)
//  .prefix(java.lang.String)
//  .range(AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange)
//  .regex(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.exact">exact</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.range">range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.suffix">suffix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.range"></a>

```java
public AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange getRange();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a>

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#range AppmeshRoute#range}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}.

---

### AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange <a name="AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange;

AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.builder()
    .end(java.lang.Number)
    .start(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.property.end">end</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.property.start">start</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.property.end"></a>

```java
public java.lang.Number getEnd();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}.

---

### AppmeshRouteSpecHttp2RouteRetryPolicy <a name="AppmeshRouteSpecHttp2RouteRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteRetryPolicy;

AppmeshRouteSpecHttp2RouteRetryPolicy.builder()
    .maxRetries(java.lang.Number)
    .perRetryTimeout(AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout)
//  .httpRetryEvents(java.util.List<java.lang.String>)
//  .tcpRetryEvents(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.perRetryTimeout">perRetryTimeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a></code> | per_retry_timeout block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.httpRetryEvents">httpRetryEvents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.tcpRetryEvents">tcpRetryEvents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}. |

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}.

---

##### `perRetryTimeout`<sup>Required</sup> <a name="perRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.perRetryTimeout"></a>

```java
public AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout getPerRetryTimeout();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a>

per_retry_timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}

---

##### `httpRetryEvents`<sup>Optional</sup> <a name="httpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.httpRetryEvents"></a>

```java
public java.util.List<java.lang.String> getHttpRetryEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}.

---

##### `tcpRetryEvents`<sup>Optional</sup> <a name="tcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.tcpRetryEvents"></a>

```java
public java.util.List<java.lang.String> getTcpRetryEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}.

---

### AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout <a name="AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout;

AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.builder()
    .unit(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttp2RouteTimeout <a name="AppmeshRouteSpecHttp2RouteTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteTimeout;

AppmeshRouteSpecHttp2RouteTimeout.builder()
//  .idle(AppmeshRouteSpecHttp2RouteTimeoutIdle)
//  .perRequest(AppmeshRouteSpecHttp2RouteTimeoutPerRequest)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.property.idle">idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a></code> | idle block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.property.perRequest">perRequest</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a></code> | per_request block. |

---

##### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.property.idle"></a>

```java
public AppmeshRouteSpecHttp2RouteTimeoutIdle getIdle();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}

---

##### `perRequest`<sup>Optional</sup> <a name="perRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.property.perRequest"></a>

```java
public AppmeshRouteSpecHttp2RouteTimeoutPerRequest getPerRequest();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a>

per_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_request AppmeshRoute#per_request}

---

### AppmeshRouteSpecHttp2RouteTimeoutIdle <a name="AppmeshRouteSpecHttp2RouteTimeoutIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteTimeoutIdle;

AppmeshRouteSpecHttp2RouteTimeoutIdle.builder()
    .unit(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttp2RouteTimeoutPerRequest <a name="AppmeshRouteSpecHttp2RouteTimeoutPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteTimeoutPerRequest;

AppmeshRouteSpecHttp2RouteTimeoutPerRequest.builder()
    .unit(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttpRoute <a name="AppmeshRouteSpecHttpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRoute;

AppmeshRouteSpecHttpRoute.builder()
    .action(AppmeshRouteSpecHttpRouteAction)
    .match(AppmeshRouteSpecHttpRouteMatch)
//  .retryPolicy(AppmeshRouteSpecHttpRouteRetryPolicy)
//  .timeout(AppmeshRouteSpecHttpRouteTimeout)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a></code> | timeout block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.action"></a>

```java
public AppmeshRouteSpecHttpRouteAction getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.match"></a>

```java
public AppmeshRouteSpecHttpRouteMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.retryPolicy"></a>

```java
public AppmeshRouteSpecHttpRouteRetryPolicy getRetryPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#retry_policy AppmeshRoute#retry_policy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.timeout"></a>

```java
public AppmeshRouteSpecHttpRouteTimeout getTimeout();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}

---

### AppmeshRouteSpecHttpRouteAction <a name="AppmeshRouteSpecHttpRouteAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteAction;

AppmeshRouteSpecHttpRouteAction.builder()
    .weightedTarget(IResolvable)
    .weightedTarget(java.util.List<AppmeshRouteSpecHttpRouteActionWeightedTarget>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction.property.weightedTarget">weightedTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>></code> | weighted_target block. |

---

##### `weightedTarget`<sup>Required</sup> <a name="weightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction.property.weightedTarget"></a>

```java
public java.lang.Object getWeightedTarget();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>>

weighted_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

### AppmeshRouteSpecHttpRouteActionWeightedTarget <a name="AppmeshRouteSpecHttpRouteActionWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteActionWeightedTarget;

AppmeshRouteSpecHttpRouteActionWeightedTarget.builder()
    .virtualNode(java.lang.String)
    .weight(java.lang.Number)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.virtualNode">virtualNode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |

---

##### `virtualNode`<sup>Required</sup> <a name="virtualNode" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.virtualNode"></a>

```java
public java.lang.String getVirtualNode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

### AppmeshRouteSpecHttpRouteMatch <a name="AppmeshRouteSpecHttpRouteMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteMatch;

AppmeshRouteSpecHttpRouteMatch.builder()
    .prefix(java.lang.String)
//  .header(IResolvable)
//  .header(java.util.List<AppmeshRouteSpecHttpRouteMatchHeader>)
//  .method(java.lang.String)
//  .port(java.lang.Number)
//  .scheme(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.method">method</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method AppmeshRoute#method}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.scheme">scheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#scheme AppmeshRoute#scheme}. |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>>

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#header AppmeshRoute#header}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method AppmeshRoute#method}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#scheme AppmeshRoute#scheme}.

---

### AppmeshRouteSpecHttpRouteMatchHeader <a name="AppmeshRouteSpecHttpRouteMatchHeader" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteMatchHeader;

AppmeshRouteSpecHttpRouteMatchHeader.builder()
    .name(java.lang.String)
//  .invert(java.lang.Boolean)
//  .invert(IResolvable)
//  .match(AppmeshRouteSpecHttpRouteMatchHeaderMatch)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.invert">invert</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a></code> | match block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}.

---

##### `invert`<sup>Optional</sup> <a name="invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.invert"></a>

```java
public java.lang.Object getInvert();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.match"></a>

```java
public AppmeshRouteSpecHttpRouteMatchHeaderMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

### AppmeshRouteSpecHttpRouteMatchHeaderMatch <a name="AppmeshRouteSpecHttpRouteMatchHeaderMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteMatchHeaderMatch;

AppmeshRouteSpecHttpRouteMatchHeaderMatch.builder()
//  .exact(java.lang.String)
//  .prefix(java.lang.String)
//  .range(AppmeshRouteSpecHttpRouteMatchHeaderMatchRange)
//  .regex(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.exact">exact</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.range">range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.suffix">suffix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.range"></a>

```java
public AppmeshRouteSpecHttpRouteMatchHeaderMatchRange getRange();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a>

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#range AppmeshRoute#range}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}.

---

### AppmeshRouteSpecHttpRouteMatchHeaderMatchRange <a name="AppmeshRouteSpecHttpRouteMatchHeaderMatchRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange;

AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.builder()
    .end(java.lang.Number)
    .start(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.property.end">end</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.property.start">start</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.property.end"></a>

```java
public java.lang.Number getEnd();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}.

---

### AppmeshRouteSpecHttpRouteRetryPolicy <a name="AppmeshRouteSpecHttpRouteRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteRetryPolicy;

AppmeshRouteSpecHttpRouteRetryPolicy.builder()
    .maxRetries(java.lang.Number)
    .perRetryTimeout(AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout)
//  .httpRetryEvents(java.util.List<java.lang.String>)
//  .tcpRetryEvents(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.perRetryTimeout">perRetryTimeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a></code> | per_retry_timeout block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.httpRetryEvents">httpRetryEvents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.tcpRetryEvents">tcpRetryEvents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}. |

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}.

---

##### `perRetryTimeout`<sup>Required</sup> <a name="perRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.perRetryTimeout"></a>

```java
public AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout getPerRetryTimeout();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a>

per_retry_timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}

---

##### `httpRetryEvents`<sup>Optional</sup> <a name="httpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.httpRetryEvents"></a>

```java
public java.util.List<java.lang.String> getHttpRetryEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}.

---

##### `tcpRetryEvents`<sup>Optional</sup> <a name="tcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.tcpRetryEvents"></a>

```java
public java.util.List<java.lang.String> getTcpRetryEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}.

---

### AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout <a name="AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout;

AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.builder()
    .unit(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttpRouteTimeout <a name="AppmeshRouteSpecHttpRouteTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteTimeout;

AppmeshRouteSpecHttpRouteTimeout.builder()
//  .idle(AppmeshRouteSpecHttpRouteTimeoutIdle)
//  .perRequest(AppmeshRouteSpecHttpRouteTimeoutPerRequest)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.property.idle">idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a></code> | idle block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.property.perRequest">perRequest</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a></code> | per_request block. |

---

##### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.property.idle"></a>

```java
public AppmeshRouteSpecHttpRouteTimeoutIdle getIdle();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}

---

##### `perRequest`<sup>Optional</sup> <a name="perRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.property.perRequest"></a>

```java
public AppmeshRouteSpecHttpRouteTimeoutPerRequest getPerRequest();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a>

per_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_request AppmeshRoute#per_request}

---

### AppmeshRouteSpecHttpRouteTimeoutIdle <a name="AppmeshRouteSpecHttpRouteTimeoutIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteTimeoutIdle;

AppmeshRouteSpecHttpRouteTimeoutIdle.builder()
    .unit(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttpRouteTimeoutPerRequest <a name="AppmeshRouteSpecHttpRouteTimeoutPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteTimeoutPerRequest;

AppmeshRouteSpecHttpRouteTimeoutPerRequest.builder()
    .unit(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecTcpRoute <a name="AppmeshRouteSpecTcpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecTcpRoute;

AppmeshRouteSpecTcpRoute.builder()
    .action(AppmeshRouteSpecTcpRouteAction)
//  .match(AppmeshRouteSpecTcpRouteMatch)
//  .timeout(AppmeshRouteSpecTcpRouteTimeout)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a></code> | timeout block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.action"></a>

```java
public AppmeshRouteSpecTcpRouteAction getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.match"></a>

```java
public AppmeshRouteSpecTcpRouteMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.timeout"></a>

```java
public AppmeshRouteSpecTcpRouteTimeout getTimeout();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}

---

### AppmeshRouteSpecTcpRouteAction <a name="AppmeshRouteSpecTcpRouteAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecTcpRouteAction;

AppmeshRouteSpecTcpRouteAction.builder()
    .weightedTarget(IResolvable)
    .weightedTarget(java.util.List<AppmeshRouteSpecTcpRouteActionWeightedTarget>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction.property.weightedTarget">weightedTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>></code> | weighted_target block. |

---

##### `weightedTarget`<sup>Required</sup> <a name="weightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction.property.weightedTarget"></a>

```java
public java.lang.Object getWeightedTarget();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>>

weighted_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

### AppmeshRouteSpecTcpRouteActionWeightedTarget <a name="AppmeshRouteSpecTcpRouteActionWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecTcpRouteActionWeightedTarget;

AppmeshRouteSpecTcpRouteActionWeightedTarget.builder()
    .virtualNode(java.lang.String)
    .weight(java.lang.Number)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.virtualNode">virtualNode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |

---

##### `virtualNode`<sup>Required</sup> <a name="virtualNode" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.virtualNode"></a>

```java
public java.lang.String getVirtualNode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

### AppmeshRouteSpecTcpRouteMatch <a name="AppmeshRouteSpecTcpRouteMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecTcpRouteMatch;

AppmeshRouteSpecTcpRouteMatch.builder()
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

### AppmeshRouteSpecTcpRouteTimeout <a name="AppmeshRouteSpecTcpRouteTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecTcpRouteTimeout;

AppmeshRouteSpecTcpRouteTimeout.builder()
//  .idle(AppmeshRouteSpecTcpRouteTimeoutIdle)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout.property.idle">idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a></code> | idle block. |

---

##### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout.property.idle"></a>

```java
public AppmeshRouteSpecTcpRouteTimeoutIdle getIdle();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}

---

### AppmeshRouteSpecTcpRouteTimeoutIdle <a name="AppmeshRouteSpecTcpRouteTimeoutIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecTcpRouteTimeoutIdle;

AppmeshRouteSpecTcpRouteTimeoutIdle.builder()
    .unit(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshRouteSpecGrpcRouteActionOutputReference <a name="AppmeshRouteSpecGrpcRouteActionOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteActionOutputReference;

new AppmeshRouteSpecGrpcRouteActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.putWeightedTarget">putWeightedTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeightedTarget` <a name="putWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.putWeightedTarget"></a>

```java
public void putWeightedTarget(IResolvable OR java.util.List<AppmeshRouteSpecGrpcRouteActionWeightedTarget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.putWeightedTarget.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.weightedTarget">weightedTarget</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList">AppmeshRouteSpecGrpcRouteActionWeightedTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.weightedTargetInput">weightedTargetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `weightedTarget`<sup>Required</sup> <a name="weightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.weightedTarget"></a>

```java
public AppmeshRouteSpecGrpcRouteActionWeightedTargetList getWeightedTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList">AppmeshRouteSpecGrpcRouteActionWeightedTargetList</a>

---

##### `weightedTargetInput`<sup>Optional</sup> <a name="weightedTargetInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.weightedTargetInput"></a>

```java
public java.lang.Object getWeightedTargetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecGrpcRouteAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a>

---


### AppmeshRouteSpecGrpcRouteActionWeightedTargetList <a name="AppmeshRouteSpecGrpcRouteActionWeightedTargetList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteActionWeightedTargetList;

new AppmeshRouteSpecGrpcRouteActionWeightedTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.get"></a>

```java
public AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>>

---


### AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference <a name="AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference;

new AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.virtualNodeInput">virtualNodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.virtualNode">virtualNode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `virtualNodeInput`<sup>Optional</sup> <a name="virtualNodeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.virtualNodeInput"></a>

```java
public java.lang.String getVirtualNodeInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `virtualNode`<sup>Required</sup> <a name="virtualNode" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.virtualNode"></a>

```java
public java.lang.String getVirtualNode();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a> OR com.hashicorp.cdktf.IResolvable

---


### AppmeshRouteSpecGrpcRouteMatchMetadataList <a name="AppmeshRouteSpecGrpcRouteMatchMetadataList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteMatchMetadataList;

new AppmeshRouteSpecGrpcRouteMatchMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.get"></a>

```java
public AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>>

---


### AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference <a name="AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference;

new AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.putRange"></a>

```java
public void putRange(AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a>

---

##### `resetExact` <a name="resetExact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetRange` <a name="resetRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetRange"></a>

```java
public void resetRange()
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetRegex"></a>

```java
public void resetRegex()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.range"></a>

```java
public AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference getRange();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference</a>

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.rangeInput"></a>

```java
public AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange getRangeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a>

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecGrpcRouteMatchMetadataMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a>

---


### AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference <a name="AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference;

new AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.endInput">endInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.startInput">startInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.end">end</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.start">start</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.endInput"></a>

```java
public java.lang.Number getEndInput();
```

- *Type:* java.lang.Number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.startInput"></a>

```java
public java.lang.Number getStartInput();
```

- *Type:* java.lang.Number

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.end"></a>

```java
public java.lang.Number getEnd();
```

- *Type:* java.lang.Number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a>

---


### AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference <a name="AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference;

new AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resetInvert">resetInvert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resetMatch">resetMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.putMatch"></a>

```java
public void putMatch(AppmeshRouteSpecGrpcRouteMatchMetadataMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a>

---

##### `resetInvert` <a name="resetInvert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resetInvert"></a>

```java
public void resetInvert()
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resetMatch"></a>

```java
public void resetMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference">AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.invertInput">invertInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.invert">invert</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.match"></a>

```java
public AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference">AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference</a>

---

##### `invertInput`<sup>Optional</sup> <a name="invertInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.invertInput"></a>

```java
public java.lang.Object getInvertInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.matchInput"></a>

```java
public AppmeshRouteSpecGrpcRouteMatchMetadataMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `invert`<sup>Required</sup> <a name="invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.invert"></a>

```java
public java.lang.Object getInvert();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a> OR com.hashicorp.cdktf.IResolvable

---


### AppmeshRouteSpecGrpcRouteMatchOutputReference <a name="AppmeshRouteSpecGrpcRouteMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteMatchOutputReference;

new AppmeshRouteSpecGrpcRouteMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetMethodName">resetMethodName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.putMetadata"></a>

```java
public void putMetadata(IResolvable OR java.util.List<AppmeshRouteSpecGrpcRouteMatchMetadata> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.putMetadata.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>>

---

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMethodName` <a name="resetMethodName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetMethodName"></a>

```java
public void resetMethodName()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList">AppmeshRouteSpecGrpcRouteMatchMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.metadataInput">metadataInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.methodNameInput">methodNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.methodName">methodName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.metadata"></a>

```java
public AppmeshRouteSpecGrpcRouteMatchMetadataList getMetadata();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList">AppmeshRouteSpecGrpcRouteMatchMetadataList</a>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.metadataInput"></a>

```java
public java.lang.Object getMetadataInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>>

---

##### `methodNameInput`<sup>Optional</sup> <a name="methodNameInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.methodNameInput"></a>

```java
public java.lang.String getMethodNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `methodName`<sup>Required</sup> <a name="methodName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.methodName"></a>

```java
public java.lang.String getMethodName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecGrpcRouteMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a>

---


### AppmeshRouteSpecGrpcRouteOutputReference <a name="AppmeshRouteSpecGrpcRouteOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteOutputReference;

new AppmeshRouteSpecGrpcRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putTimeout">putTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putAction"></a>

```java
public void putAction(AppmeshRouteSpecGrpcRouteAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putMatch"></a>

```java
public void putMatch(AppmeshRouteSpecGrpcRouteMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putRetryPolicy"></a>

```java
public void putRetryPolicy(AppmeshRouteSpecGrpcRouteRetryPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a>

---

##### `putTimeout` <a name="putTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putTimeout"></a>

```java
public void putTimeout(AppmeshRouteSpecGrpcRouteTimeout value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a>

---

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetMatch"></a>

```java
public void resetMatch()
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetRetryPolicy"></a>

```java
public void resetRetryPolicy()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference">AppmeshRouteSpecGrpcRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference">AppmeshRouteSpecGrpcRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference">AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference">AppmeshRouteSpecGrpcRouteTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.timeoutInput">timeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.action"></a>

```java
public AppmeshRouteSpecGrpcRouteActionOutputReference getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference">AppmeshRouteSpecGrpcRouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.match"></a>

```java
public AppmeshRouteSpecGrpcRouteMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference">AppmeshRouteSpecGrpcRouteMatchOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.retryPolicy"></a>

```java
public AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference getRetryPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference">AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.timeout"></a>

```java
public AppmeshRouteSpecGrpcRouteTimeoutOutputReference getTimeout();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference">AppmeshRouteSpecGrpcRouteTimeoutOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.actionInput"></a>

```java
public AppmeshRouteSpecGrpcRouteAction getActionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.matchInput"></a>

```java
public AppmeshRouteSpecGrpcRouteMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a>

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.retryPolicyInput"></a>

```java
public AppmeshRouteSpecGrpcRouteRetryPolicy getRetryPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.timeoutInput"></a>

```java
public AppmeshRouteSpecGrpcRouteTimeout getTimeoutInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecGrpcRoute getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a>

---


### AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference <a name="AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference;

new AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.putPerRetryTimeout">putPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetGrpcRetryEvents">resetGrpcRetryEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetHttpRetryEvents">resetHttpRetryEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetTcpRetryEvents">resetTcpRetryEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPerRetryTimeout` <a name="putPerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.putPerRetryTimeout"></a>

```java
public void putPerRetryTimeout(AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.putPerRetryTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a>

---

##### `resetGrpcRetryEvents` <a name="resetGrpcRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetGrpcRetryEvents"></a>

```java
public void resetGrpcRetryEvents()
```

##### `resetHttpRetryEvents` <a name="resetHttpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetHttpRetryEvents"></a>

```java
public void resetHttpRetryEvents()
```

##### `resetTcpRetryEvents` <a name="resetTcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetTcpRetryEvents"></a>

```java
public void resetTcpRetryEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.perRetryTimeout">perRetryTimeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.grpcRetryEventsInput">grpcRetryEventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.httpRetryEventsInput">httpRetryEventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.perRetryTimeoutInput">perRetryTimeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.tcpRetryEventsInput">tcpRetryEventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.grpcRetryEvents">grpcRetryEvents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.httpRetryEvents">httpRetryEvents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.tcpRetryEvents">tcpRetryEvents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `perRetryTimeout`<sup>Required</sup> <a name="perRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.perRetryTimeout"></a>

```java
public AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference getPerRetryTimeout();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference</a>

---

##### `grpcRetryEventsInput`<sup>Optional</sup> <a name="grpcRetryEventsInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.grpcRetryEventsInput"></a>

```java
public java.util.List<java.lang.String> getGrpcRetryEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpRetryEventsInput`<sup>Optional</sup> <a name="httpRetryEventsInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.httpRetryEventsInput"></a>

```java
public java.util.List<java.lang.String> getHttpRetryEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `perRetryTimeoutInput`<sup>Optional</sup> <a name="perRetryTimeoutInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.perRetryTimeoutInput"></a>

```java
public AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout getPerRetryTimeoutInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a>

---

##### `tcpRetryEventsInput`<sup>Optional</sup> <a name="tcpRetryEventsInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.tcpRetryEventsInput"></a>

```java
public java.util.List<java.lang.String> getTcpRetryEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `grpcRetryEvents`<sup>Required</sup> <a name="grpcRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.grpcRetryEvents"></a>

```java
public java.util.List<java.lang.String> getGrpcRetryEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpRetryEvents`<sup>Required</sup> <a name="httpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.httpRetryEvents"></a>

```java
public java.util.List<java.lang.String> getHttpRetryEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="tcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.tcpRetryEvents"></a>

```java
public java.util.List<java.lang.String> getTcpRetryEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecGrpcRouteRetryPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a>

---


### AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference <a name="AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference;

new AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a>

---


### AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference <a name="AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference;

new AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecGrpcRouteTimeoutIdle getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a>

---


### AppmeshRouteSpecGrpcRouteTimeoutOutputReference <a name="AppmeshRouteSpecGrpcRouteTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteTimeoutOutputReference;

new AppmeshRouteSpecGrpcRouteTimeoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putIdle">putIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putPerRequest">putPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resetIdle">resetIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resetPerRequest">resetPerRequest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdle` <a name="putIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putIdle"></a>

```java
public void putIdle(AppmeshRouteSpecGrpcRouteTimeoutIdle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putIdle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a>

---

##### `putPerRequest` <a name="putPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putPerRequest"></a>

```java
public void putPerRequest(AppmeshRouteSpecGrpcRouteTimeoutPerRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putPerRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a>

---

##### `resetIdle` <a name="resetIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resetIdle"></a>

```java
public void resetIdle()
```

##### `resetPerRequest` <a name="resetPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resetPerRequest"></a>

```java
public void resetPerRequest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.idle">idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference">AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.perRequest">perRequest</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference">AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.idleInput">idleInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.perRequestInput">perRequestInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idle`<sup>Required</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.idle"></a>

```java
public AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference getIdle();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference">AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference</a>

---

##### `perRequest`<sup>Required</sup> <a name="perRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.perRequest"></a>

```java
public AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference getPerRequest();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference">AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference</a>

---

##### `idleInput`<sup>Optional</sup> <a name="idleInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.idleInput"></a>

```java
public AppmeshRouteSpecGrpcRouteTimeoutIdle getIdleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a>

---

##### `perRequestInput`<sup>Optional</sup> <a name="perRequestInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.perRequestInput"></a>

```java
public AppmeshRouteSpecGrpcRouteTimeoutPerRequest getPerRequestInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecGrpcRouteTimeout getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a>

---


### AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference <a name="AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference;

new AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecGrpcRouteTimeoutPerRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a>

---


### AppmeshRouteSpecHttp2RouteActionOutputReference <a name="AppmeshRouteSpecHttp2RouteActionOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteActionOutputReference;

new AppmeshRouteSpecHttp2RouteActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.putWeightedTarget">putWeightedTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeightedTarget` <a name="putWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.putWeightedTarget"></a>

```java
public void putWeightedTarget(IResolvable OR java.util.List<AppmeshRouteSpecHttp2RouteActionWeightedTarget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.putWeightedTarget.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.weightedTarget">weightedTarget</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList">AppmeshRouteSpecHttp2RouteActionWeightedTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.weightedTargetInput">weightedTargetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `weightedTarget`<sup>Required</sup> <a name="weightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.weightedTarget"></a>

```java
public AppmeshRouteSpecHttp2RouteActionWeightedTargetList getWeightedTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList">AppmeshRouteSpecHttp2RouteActionWeightedTargetList</a>

---

##### `weightedTargetInput`<sup>Optional</sup> <a name="weightedTargetInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.weightedTargetInput"></a>

```java
public java.lang.Object getWeightedTargetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttp2RouteAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a>

---


### AppmeshRouteSpecHttp2RouteActionWeightedTargetList <a name="AppmeshRouteSpecHttp2RouteActionWeightedTargetList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteActionWeightedTargetList;

new AppmeshRouteSpecHttp2RouteActionWeightedTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.get"></a>

```java
public AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>>

---


### AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference <a name="AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference;

new AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.virtualNodeInput">virtualNodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.virtualNode">virtualNode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `virtualNodeInput`<sup>Optional</sup> <a name="virtualNodeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.virtualNodeInput"></a>

```java
public java.lang.String getVirtualNodeInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `virtualNode`<sup>Required</sup> <a name="virtualNode" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.virtualNode"></a>

```java
public java.lang.String getVirtualNode();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a> OR com.hashicorp.cdktf.IResolvable

---


### AppmeshRouteSpecHttp2RouteMatchHeaderList <a name="AppmeshRouteSpecHttp2RouteMatchHeaderList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteMatchHeaderList;

new AppmeshRouteSpecHttp2RouteMatchHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.get"></a>

```java
public AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>>

---


### AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference <a name="AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference;

new AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.putRange"></a>

```java
public void putRange(AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a>

---

##### `resetExact` <a name="resetExact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetRange` <a name="resetRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRange"></a>

```java
public void resetRange()
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRegex"></a>

```java
public void resetRegex()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.range"></a>

```java
public AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference getRange();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference</a>

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.rangeInput"></a>

```java
public AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange getRangeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a>

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttp2RouteMatchHeaderMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a>

---


### AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference <a name="AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference;

new AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.endInput">endInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.startInput">startInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.end">end</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.start">start</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.endInput"></a>

```java
public java.lang.Number getEndInput();
```

- *Type:* java.lang.Number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.startInput"></a>

```java
public java.lang.Number getStartInput();
```

- *Type:* java.lang.Number

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.end"></a>

```java
public java.lang.Number getEnd();
```

- *Type:* java.lang.Number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a>

---


### AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference <a name="AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference;

new AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resetInvert">resetInvert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resetMatch">resetMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch"></a>

```java
public void putMatch(AppmeshRouteSpecHttp2RouteMatchHeaderMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a>

---

##### `resetInvert` <a name="resetInvert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resetInvert"></a>

```java
public void resetInvert()
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resetMatch"></a>

```java
public void resetMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference">AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.invertInput">invertInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.invert">invert</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.match"></a>

```java
public AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference">AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference</a>

---

##### `invertInput`<sup>Optional</sup> <a name="invertInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.invertInput"></a>

```java
public java.lang.Object getInvertInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.matchInput"></a>

```java
public AppmeshRouteSpecHttp2RouteMatchHeaderMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `invert`<sup>Required</sup> <a name="invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.invert"></a>

```java
public java.lang.Object getInvert();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a> OR com.hashicorp.cdktf.IResolvable

---


### AppmeshRouteSpecHttp2RouteMatchOutputReference <a name="AppmeshRouteSpecHttp2RouteMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteMatchOutputReference;

new AppmeshRouteSpecHttp2RouteMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.putHeader"></a>

```java
public void putHeader(IResolvable OR java.util.List<AppmeshRouteSpecHttp2RouteMatchHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.putHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>>

---

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetScheme"></a>

```java
public void resetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList">AppmeshRouteSpecHttp2RouteMatchHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.header"></a>

```java
public AppmeshRouteSpecHttp2RouteMatchHeaderList getHeader();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList">AppmeshRouteSpecHttp2RouteMatchHeaderList</a>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.headerInput"></a>

```java
public java.lang.Object getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>>

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttp2RouteMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a>

---


### AppmeshRouteSpecHttp2RouteOutputReference <a name="AppmeshRouteSpecHttp2RouteOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteOutputReference;

new AppmeshRouteSpecHttp2RouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putTimeout">putTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putAction"></a>

```java
public void putAction(AppmeshRouteSpecHttp2RouteAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putMatch"></a>

```java
public void putMatch(AppmeshRouteSpecHttp2RouteMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putRetryPolicy"></a>

```java
public void putRetryPolicy(AppmeshRouteSpecHttp2RouteRetryPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a>

---

##### `putTimeout` <a name="putTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putTimeout"></a>

```java
public void putTimeout(AppmeshRouteSpecHttp2RouteTimeout value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a>

---

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resetRetryPolicy"></a>

```java
public void resetRetryPolicy()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference">AppmeshRouteSpecHttp2RouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference">AppmeshRouteSpecHttp2RouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference">AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference">AppmeshRouteSpecHttp2RouteTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.timeoutInput">timeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.action"></a>

```java
public AppmeshRouteSpecHttp2RouteActionOutputReference getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference">AppmeshRouteSpecHttp2RouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.match"></a>

```java
public AppmeshRouteSpecHttp2RouteMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference">AppmeshRouteSpecHttp2RouteMatchOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.retryPolicy"></a>

```java
public AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference getRetryPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference">AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.timeout"></a>

```java
public AppmeshRouteSpecHttp2RouteTimeoutOutputReference getTimeout();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference">AppmeshRouteSpecHttp2RouteTimeoutOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.actionInput"></a>

```java
public AppmeshRouteSpecHttp2RouteAction getActionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.matchInput"></a>

```java
public AppmeshRouteSpecHttp2RouteMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a>

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.retryPolicyInput"></a>

```java
public AppmeshRouteSpecHttp2RouteRetryPolicy getRetryPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.timeoutInput"></a>

```java
public AppmeshRouteSpecHttp2RouteTimeout getTimeoutInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttp2Route getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a>

---


### AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference <a name="AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference;

new AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.putPerRetryTimeout">putPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resetHttpRetryEvents">resetHttpRetryEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resetTcpRetryEvents">resetTcpRetryEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPerRetryTimeout` <a name="putPerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.putPerRetryTimeout"></a>

```java
public void putPerRetryTimeout(AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.putPerRetryTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a>

---

##### `resetHttpRetryEvents` <a name="resetHttpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resetHttpRetryEvents"></a>

```java
public void resetHttpRetryEvents()
```

##### `resetTcpRetryEvents` <a name="resetTcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resetTcpRetryEvents"></a>

```java
public void resetTcpRetryEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.perRetryTimeout">perRetryTimeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.httpRetryEventsInput">httpRetryEventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.perRetryTimeoutInput">perRetryTimeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.tcpRetryEventsInput">tcpRetryEventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.httpRetryEvents">httpRetryEvents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.tcpRetryEvents">tcpRetryEvents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `perRetryTimeout`<sup>Required</sup> <a name="perRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.perRetryTimeout"></a>

```java
public AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference getPerRetryTimeout();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference</a>

---

##### `httpRetryEventsInput`<sup>Optional</sup> <a name="httpRetryEventsInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.httpRetryEventsInput"></a>

```java
public java.util.List<java.lang.String> getHttpRetryEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `perRetryTimeoutInput`<sup>Optional</sup> <a name="perRetryTimeoutInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.perRetryTimeoutInput"></a>

```java
public AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout getPerRetryTimeoutInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a>

---

##### `tcpRetryEventsInput`<sup>Optional</sup> <a name="tcpRetryEventsInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.tcpRetryEventsInput"></a>

```java
public java.util.List<java.lang.String> getTcpRetryEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpRetryEvents`<sup>Required</sup> <a name="httpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.httpRetryEvents"></a>

```java
public java.util.List<java.lang.String> getHttpRetryEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="tcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.tcpRetryEvents"></a>

```java
public java.util.List<java.lang.String> getTcpRetryEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttp2RouteRetryPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a>

---


### AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference <a name="AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference;

new AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a>

---


### AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference <a name="AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference;

new AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttp2RouteTimeoutIdle getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a>

---


### AppmeshRouteSpecHttp2RouteTimeoutOutputReference <a name="AppmeshRouteSpecHttp2RouteTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteTimeoutOutputReference;

new AppmeshRouteSpecHttp2RouteTimeoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putIdle">putIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putPerRequest">putPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resetIdle">resetIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resetPerRequest">resetPerRequest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdle` <a name="putIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putIdle"></a>

```java
public void putIdle(AppmeshRouteSpecHttp2RouteTimeoutIdle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putIdle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a>

---

##### `putPerRequest` <a name="putPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putPerRequest"></a>

```java
public void putPerRequest(AppmeshRouteSpecHttp2RouteTimeoutPerRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putPerRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a>

---

##### `resetIdle` <a name="resetIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resetIdle"></a>

```java
public void resetIdle()
```

##### `resetPerRequest` <a name="resetPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resetPerRequest"></a>

```java
public void resetPerRequest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.idle">idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference">AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.perRequest">perRequest</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference">AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.idleInput">idleInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.perRequestInput">perRequestInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idle`<sup>Required</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.idle"></a>

```java
public AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference getIdle();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference">AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference</a>

---

##### `perRequest`<sup>Required</sup> <a name="perRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.perRequest"></a>

```java
public AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference getPerRequest();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference">AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference</a>

---

##### `idleInput`<sup>Optional</sup> <a name="idleInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.idleInput"></a>

```java
public AppmeshRouteSpecHttp2RouteTimeoutIdle getIdleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a>

---

##### `perRequestInput`<sup>Optional</sup> <a name="perRequestInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.perRequestInput"></a>

```java
public AppmeshRouteSpecHttp2RouteTimeoutPerRequest getPerRequestInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttp2RouteTimeout getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a>

---


### AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference <a name="AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference;

new AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttp2RouteTimeoutPerRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a>

---


### AppmeshRouteSpecHttpRouteActionOutputReference <a name="AppmeshRouteSpecHttpRouteActionOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteActionOutputReference;

new AppmeshRouteSpecHttpRouteActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.putWeightedTarget">putWeightedTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeightedTarget` <a name="putWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.putWeightedTarget"></a>

```java
public void putWeightedTarget(IResolvable OR java.util.List<AppmeshRouteSpecHttpRouteActionWeightedTarget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.putWeightedTarget.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.weightedTarget">weightedTarget</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList">AppmeshRouteSpecHttpRouteActionWeightedTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.weightedTargetInput">weightedTargetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `weightedTarget`<sup>Required</sup> <a name="weightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.weightedTarget"></a>

```java
public AppmeshRouteSpecHttpRouteActionWeightedTargetList getWeightedTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList">AppmeshRouteSpecHttpRouteActionWeightedTargetList</a>

---

##### `weightedTargetInput`<sup>Optional</sup> <a name="weightedTargetInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.weightedTargetInput"></a>

```java
public java.lang.Object getWeightedTargetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttpRouteAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a>

---


### AppmeshRouteSpecHttpRouteActionWeightedTargetList <a name="AppmeshRouteSpecHttpRouteActionWeightedTargetList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteActionWeightedTargetList;

new AppmeshRouteSpecHttpRouteActionWeightedTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.get"></a>

```java
public AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>>

---


### AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference <a name="AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference;

new AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.virtualNodeInput">virtualNodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.virtualNode">virtualNode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `virtualNodeInput`<sup>Optional</sup> <a name="virtualNodeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.virtualNodeInput"></a>

```java
public java.lang.String getVirtualNodeInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `virtualNode`<sup>Required</sup> <a name="virtualNode" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.virtualNode"></a>

```java
public java.lang.String getVirtualNode();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a> OR com.hashicorp.cdktf.IResolvable

---


### AppmeshRouteSpecHttpRouteMatchHeaderList <a name="AppmeshRouteSpecHttpRouteMatchHeaderList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteMatchHeaderList;

new AppmeshRouteSpecHttpRouteMatchHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.get"></a>

```java
public AppmeshRouteSpecHttpRouteMatchHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>>

---


### AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference <a name="AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference;

new AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.putRange"></a>

```java
public void putRange(AppmeshRouteSpecHttpRouteMatchHeaderMatchRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a>

---

##### `resetExact` <a name="resetExact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetRange` <a name="resetRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRange"></a>

```java
public void resetRange()
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRegex"></a>

```java
public void resetRegex()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference">AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.range"></a>

```java
public AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference getRange();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference">AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference</a>

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.rangeInput"></a>

```java
public AppmeshRouteSpecHttpRouteMatchHeaderMatchRange getRangeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a>

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttpRouteMatchHeaderMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a>

---


### AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference <a name="AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference;

new AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.endInput">endInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.startInput">startInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.end">end</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.start">start</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.endInput"></a>

```java
public java.lang.Number getEndInput();
```

- *Type:* java.lang.Number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.startInput"></a>

```java
public java.lang.Number getStartInput();
```

- *Type:* java.lang.Number

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.end"></a>

```java
public java.lang.Number getEnd();
```

- *Type:* java.lang.Number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttpRouteMatchHeaderMatchRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a>

---


### AppmeshRouteSpecHttpRouteMatchHeaderOutputReference <a name="AppmeshRouteSpecHttpRouteMatchHeaderOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference;

new AppmeshRouteSpecHttpRouteMatchHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resetInvert">resetInvert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resetMatch">resetMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.putMatch"></a>

```java
public void putMatch(AppmeshRouteSpecHttpRouteMatchHeaderMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a>

---

##### `resetInvert` <a name="resetInvert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resetInvert"></a>

```java
public void resetInvert()
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resetMatch"></a>

```java
public void resetMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference">AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.invertInput">invertInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.invert">invert</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.match"></a>

```java
public AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference">AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference</a>

---

##### `invertInput`<sup>Optional</sup> <a name="invertInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.invertInput"></a>

```java
public java.lang.Object getInvertInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.matchInput"></a>

```java
public AppmeshRouteSpecHttpRouteMatchHeaderMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `invert`<sup>Required</sup> <a name="invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.invert"></a>

```java
public java.lang.Object getInvert();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a> OR com.hashicorp.cdktf.IResolvable

---


### AppmeshRouteSpecHttpRouteMatchOutputReference <a name="AppmeshRouteSpecHttpRouteMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteMatchOutputReference;

new AppmeshRouteSpecHttpRouteMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.putHeader"></a>

```java
public void putHeader(IResolvable OR java.util.List<AppmeshRouteSpecHttpRouteMatchHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.putHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>>

---

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetScheme"></a>

```java
public void resetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList">AppmeshRouteSpecHttpRouteMatchHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.header"></a>

```java
public AppmeshRouteSpecHttpRouteMatchHeaderList getHeader();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList">AppmeshRouteSpecHttpRouteMatchHeaderList</a>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.headerInput"></a>

```java
public java.lang.Object getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>>

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttpRouteMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a>

---


### AppmeshRouteSpecHttpRouteOutputReference <a name="AppmeshRouteSpecHttpRouteOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteOutputReference;

new AppmeshRouteSpecHttpRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putTimeout">putTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putAction"></a>

```java
public void putAction(AppmeshRouteSpecHttpRouteAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putMatch"></a>

```java
public void putMatch(AppmeshRouteSpecHttpRouteMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putRetryPolicy"></a>

```java
public void putRetryPolicy(AppmeshRouteSpecHttpRouteRetryPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a>

---

##### `putTimeout` <a name="putTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putTimeout"></a>

```java
public void putTimeout(AppmeshRouteSpecHttpRouteTimeout value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a>

---

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resetRetryPolicy"></a>

```java
public void resetRetryPolicy()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference">AppmeshRouteSpecHttpRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference">AppmeshRouteSpecHttpRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference">AppmeshRouteSpecHttpRouteRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference">AppmeshRouteSpecHttpRouteTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.timeoutInput">timeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.action"></a>

```java
public AppmeshRouteSpecHttpRouteActionOutputReference getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference">AppmeshRouteSpecHttpRouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.match"></a>

```java
public AppmeshRouteSpecHttpRouteMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference">AppmeshRouteSpecHttpRouteMatchOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.retryPolicy"></a>

```java
public AppmeshRouteSpecHttpRouteRetryPolicyOutputReference getRetryPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference">AppmeshRouteSpecHttpRouteRetryPolicyOutputReference</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.timeout"></a>

```java
public AppmeshRouteSpecHttpRouteTimeoutOutputReference getTimeout();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference">AppmeshRouteSpecHttpRouteTimeoutOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.actionInput"></a>

```java
public AppmeshRouteSpecHttpRouteAction getActionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.matchInput"></a>

```java
public AppmeshRouteSpecHttpRouteMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a>

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.retryPolicyInput"></a>

```java
public AppmeshRouteSpecHttpRouteRetryPolicy getRetryPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.timeoutInput"></a>

```java
public AppmeshRouteSpecHttpRouteTimeout getTimeoutInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttpRoute getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a>

---


### AppmeshRouteSpecHttpRouteRetryPolicyOutputReference <a name="AppmeshRouteSpecHttpRouteRetryPolicyOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference;

new AppmeshRouteSpecHttpRouteRetryPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.putPerRetryTimeout">putPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resetHttpRetryEvents">resetHttpRetryEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resetTcpRetryEvents">resetTcpRetryEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPerRetryTimeout` <a name="putPerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.putPerRetryTimeout"></a>

```java
public void putPerRetryTimeout(AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.putPerRetryTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a>

---

##### `resetHttpRetryEvents` <a name="resetHttpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resetHttpRetryEvents"></a>

```java
public void resetHttpRetryEvents()
```

##### `resetTcpRetryEvents` <a name="resetTcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resetTcpRetryEvents"></a>

```java
public void resetTcpRetryEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.perRetryTimeout">perRetryTimeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.httpRetryEventsInput">httpRetryEventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.perRetryTimeoutInput">perRetryTimeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.tcpRetryEventsInput">tcpRetryEventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.httpRetryEvents">httpRetryEvents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.tcpRetryEvents">tcpRetryEvents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `perRetryTimeout`<sup>Required</sup> <a name="perRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.perRetryTimeout"></a>

```java
public AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference getPerRetryTimeout();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference</a>

---

##### `httpRetryEventsInput`<sup>Optional</sup> <a name="httpRetryEventsInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.httpRetryEventsInput"></a>

```java
public java.util.List<java.lang.String> getHttpRetryEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `perRetryTimeoutInput`<sup>Optional</sup> <a name="perRetryTimeoutInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.perRetryTimeoutInput"></a>

```java
public AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout getPerRetryTimeoutInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a>

---

##### `tcpRetryEventsInput`<sup>Optional</sup> <a name="tcpRetryEventsInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.tcpRetryEventsInput"></a>

```java
public java.util.List<java.lang.String> getTcpRetryEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpRetryEvents`<sup>Required</sup> <a name="httpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.httpRetryEvents"></a>

```java
public java.util.List<java.lang.String> getHttpRetryEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="tcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.tcpRetryEvents"></a>

```java
public java.util.List<java.lang.String> getTcpRetryEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttpRouteRetryPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a>

---


### AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference <a name="AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference;

new AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a>

---


### AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference <a name="AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference;

new AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttpRouteTimeoutIdle getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a>

---


### AppmeshRouteSpecHttpRouteTimeoutOutputReference <a name="AppmeshRouteSpecHttpRouteTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteTimeoutOutputReference;

new AppmeshRouteSpecHttpRouteTimeoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putIdle">putIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putPerRequest">putPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resetIdle">resetIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resetPerRequest">resetPerRequest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdle` <a name="putIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putIdle"></a>

```java
public void putIdle(AppmeshRouteSpecHttpRouteTimeoutIdle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putIdle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a>

---

##### `putPerRequest` <a name="putPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putPerRequest"></a>

```java
public void putPerRequest(AppmeshRouteSpecHttpRouteTimeoutPerRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putPerRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a>

---

##### `resetIdle` <a name="resetIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resetIdle"></a>

```java
public void resetIdle()
```

##### `resetPerRequest` <a name="resetPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resetPerRequest"></a>

```java
public void resetPerRequest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.idle">idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference">AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.perRequest">perRequest</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference">AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.idleInput">idleInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.perRequestInput">perRequestInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idle`<sup>Required</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.idle"></a>

```java
public AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference getIdle();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference">AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference</a>

---

##### `perRequest`<sup>Required</sup> <a name="perRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.perRequest"></a>

```java
public AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference getPerRequest();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference">AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference</a>

---

##### `idleInput`<sup>Optional</sup> <a name="idleInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.idleInput"></a>

```java
public AppmeshRouteSpecHttpRouteTimeoutIdle getIdleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a>

---

##### `perRequestInput`<sup>Optional</sup> <a name="perRequestInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.perRequestInput"></a>

```java
public AppmeshRouteSpecHttpRouteTimeoutPerRequest getPerRequestInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttpRouteTimeout getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a>

---


### AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference <a name="AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference;

new AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecHttpRouteTimeoutPerRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a>

---


### AppmeshRouteSpecOutputReference <a name="AppmeshRouteSpecOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecOutputReference;

new AppmeshRouteSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putGrpcRoute">putGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttp2Route">putHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttpRoute">putHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putTcpRoute">putTcpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetGrpcRoute">resetGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetHttp2Route">resetHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetHttpRoute">resetHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetTcpRoute">resetTcpRoute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrpcRoute` <a name="putGrpcRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putGrpcRoute"></a>

```java
public void putGrpcRoute(AppmeshRouteSpecGrpcRoute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putGrpcRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a>

---

##### `putHttp2Route` <a name="putHttp2Route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttp2Route"></a>

```java
public void putHttp2Route(AppmeshRouteSpecHttp2Route value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttp2Route.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a>

---

##### `putHttpRoute` <a name="putHttpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttpRoute"></a>

```java
public void putHttpRoute(AppmeshRouteSpecHttpRoute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttpRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a>

---

##### `putTcpRoute` <a name="putTcpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putTcpRoute"></a>

```java
public void putTcpRoute(AppmeshRouteSpecTcpRoute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putTcpRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a>

---

##### `resetGrpcRoute` <a name="resetGrpcRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetGrpcRoute"></a>

```java
public void resetGrpcRoute()
```

##### `resetHttp2Route` <a name="resetHttp2Route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetHttp2Route"></a>

```java
public void resetHttp2Route()
```

##### `resetHttpRoute` <a name="resetHttpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetHttpRoute"></a>

```java
public void resetHttpRoute()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetTcpRoute` <a name="resetTcpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetTcpRoute"></a>

```java
public void resetTcpRoute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.grpcRoute">grpcRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference">AppmeshRouteSpecGrpcRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.http2Route">http2Route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference">AppmeshRouteSpecHttp2RouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.httpRoute">httpRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference">AppmeshRouteSpecHttpRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.tcpRoute">tcpRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference">AppmeshRouteSpecTcpRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.grpcRouteInput">grpcRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.http2RouteInput">http2RouteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.httpRouteInput">httpRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.tcpRouteInput">tcpRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grpcRoute`<sup>Required</sup> <a name="grpcRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.grpcRoute"></a>

```java
public AppmeshRouteSpecGrpcRouteOutputReference getGrpcRoute();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference">AppmeshRouteSpecGrpcRouteOutputReference</a>

---

##### `http2Route`<sup>Required</sup> <a name="http2Route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.http2Route"></a>

```java
public AppmeshRouteSpecHttp2RouteOutputReference getHttp2Route();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference">AppmeshRouteSpecHttp2RouteOutputReference</a>

---

##### `httpRoute`<sup>Required</sup> <a name="httpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.httpRoute"></a>

```java
public AppmeshRouteSpecHttpRouteOutputReference getHttpRoute();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference">AppmeshRouteSpecHttpRouteOutputReference</a>

---

##### `tcpRoute`<sup>Required</sup> <a name="tcpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.tcpRoute"></a>

```java
public AppmeshRouteSpecTcpRouteOutputReference getTcpRoute();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference">AppmeshRouteSpecTcpRouteOutputReference</a>

---

##### `grpcRouteInput`<sup>Optional</sup> <a name="grpcRouteInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.grpcRouteInput"></a>

```java
public AppmeshRouteSpecGrpcRoute getGrpcRouteInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a>

---

##### `http2RouteInput`<sup>Optional</sup> <a name="http2RouteInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.http2RouteInput"></a>

```java
public AppmeshRouteSpecHttp2Route getHttp2RouteInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a>

---

##### `httpRouteInput`<sup>Optional</sup> <a name="httpRouteInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.httpRouteInput"></a>

```java
public AppmeshRouteSpecHttpRoute getHttpRouteInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `tcpRouteInput`<sup>Optional</sup> <a name="tcpRouteInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.tcpRouteInput"></a>

```java
public AppmeshRouteSpecTcpRoute getTcpRouteInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a>

---


### AppmeshRouteSpecTcpRouteActionOutputReference <a name="AppmeshRouteSpecTcpRouteActionOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecTcpRouteActionOutputReference;

new AppmeshRouteSpecTcpRouteActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.putWeightedTarget">putWeightedTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeightedTarget` <a name="putWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.putWeightedTarget"></a>

```java
public void putWeightedTarget(IResolvable OR java.util.List<AppmeshRouteSpecTcpRouteActionWeightedTarget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.putWeightedTarget.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.weightedTarget">weightedTarget</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList">AppmeshRouteSpecTcpRouteActionWeightedTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.weightedTargetInput">weightedTargetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `weightedTarget`<sup>Required</sup> <a name="weightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.weightedTarget"></a>

```java
public AppmeshRouteSpecTcpRouteActionWeightedTargetList getWeightedTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList">AppmeshRouteSpecTcpRouteActionWeightedTargetList</a>

---

##### `weightedTargetInput`<sup>Optional</sup> <a name="weightedTargetInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.weightedTargetInput"></a>

```java
public java.lang.Object getWeightedTargetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecTcpRouteAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a>

---


### AppmeshRouteSpecTcpRouteActionWeightedTargetList <a name="AppmeshRouteSpecTcpRouteActionWeightedTargetList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecTcpRouteActionWeightedTargetList;

new AppmeshRouteSpecTcpRouteActionWeightedTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.get"></a>

```java
public AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>>

---


### AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference <a name="AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference;

new AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.virtualNodeInput">virtualNodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.virtualNode">virtualNode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `virtualNodeInput`<sup>Optional</sup> <a name="virtualNodeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.virtualNodeInput"></a>

```java
public java.lang.String getVirtualNodeInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `virtualNode`<sup>Required</sup> <a name="virtualNode" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.virtualNode"></a>

```java
public java.lang.String getVirtualNode();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a> OR com.hashicorp.cdktf.IResolvable

---


### AppmeshRouteSpecTcpRouteMatchOutputReference <a name="AppmeshRouteSpecTcpRouteMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecTcpRouteMatchOutputReference;

new AppmeshRouteSpecTcpRouteMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecTcpRouteMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a>

---


### AppmeshRouteSpecTcpRouteOutputReference <a name="AppmeshRouteSpecTcpRouteOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecTcpRouteOutputReference;

new AppmeshRouteSpecTcpRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putTimeout">putTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putAction"></a>

```java
public void putAction(AppmeshRouteSpecTcpRouteAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putMatch"></a>

```java
public void putMatch(AppmeshRouteSpecTcpRouteMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a>

---

##### `putTimeout` <a name="putTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putTimeout"></a>

```java
public void putTimeout(AppmeshRouteSpecTcpRouteTimeout value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a>

---

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resetMatch"></a>

```java
public void resetMatch()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference">AppmeshRouteSpecTcpRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference">AppmeshRouteSpecTcpRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference">AppmeshRouteSpecTcpRouteTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.timeoutInput">timeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.action"></a>

```java
public AppmeshRouteSpecTcpRouteActionOutputReference getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference">AppmeshRouteSpecTcpRouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.match"></a>

```java
public AppmeshRouteSpecTcpRouteMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference">AppmeshRouteSpecTcpRouteMatchOutputReference</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.timeout"></a>

```java
public AppmeshRouteSpecTcpRouteTimeoutOutputReference getTimeout();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference">AppmeshRouteSpecTcpRouteTimeoutOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.actionInput"></a>

```java
public AppmeshRouteSpecTcpRouteAction getActionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.matchInput"></a>

```java
public AppmeshRouteSpecTcpRouteMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.timeoutInput"></a>

```java
public AppmeshRouteSpecTcpRouteTimeout getTimeoutInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecTcpRoute getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a>

---


### AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference <a name="AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference;

new AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecTcpRouteTimeoutIdle getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a>

---


### AppmeshRouteSpecTcpRouteTimeoutOutputReference <a name="AppmeshRouteSpecTcpRouteTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_route.AppmeshRouteSpecTcpRouteTimeoutOutputReference;

new AppmeshRouteSpecTcpRouteTimeoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.putIdle">putIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resetIdle">resetIdle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdle` <a name="putIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.putIdle"></a>

```java
public void putIdle(AppmeshRouteSpecTcpRouteTimeoutIdle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.putIdle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a>

---

##### `resetIdle` <a name="resetIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resetIdle"></a>

```java
public void resetIdle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.idle">idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference">AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.idleInput">idleInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idle`<sup>Required</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.idle"></a>

```java
public AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference getIdle();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference">AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference</a>

---

##### `idleInput`<sup>Optional</sup> <a name="idleInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.idleInput"></a>

```java
public AppmeshRouteSpecTcpRouteTimeoutIdle getIdleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.internalValue"></a>

```java
public AppmeshRouteSpecTcpRouteTimeout getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a>

---



