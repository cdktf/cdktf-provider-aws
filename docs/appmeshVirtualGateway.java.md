# `appmeshVirtualGateway` Submodule <a name="`appmeshVirtualGateway` Submodule" id="@cdktf/provider-aws.appmeshVirtualGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshVirtualGateway <a name="AppmeshVirtualGateway" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway aws_appmesh_virtual_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGateway;

AppmeshVirtualGateway.Builder.create(Construct scope, java.lang.String id)
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
    .spec(AppmeshVirtualGatewaySpec)
//  .id(java.lang.String)
//  .meshOwner(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.meshName">meshName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_name AppmeshVirtualGateway#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#name AppmeshVirtualGateway#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#id AppmeshVirtualGateway#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.meshOwner">meshOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_owner AppmeshVirtualGateway#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags AppmeshVirtualGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags_all AppmeshVirtualGateway#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.meshName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_name AppmeshVirtualGateway#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#name AppmeshVirtualGateway#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#spec AppmeshVirtualGateway#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#id AppmeshVirtualGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshOwner`<sup>Optional</sup> <a name="meshOwner" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.meshOwner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_owner AppmeshVirtualGateway#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags AppmeshVirtualGateway#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags_all AppmeshVirtualGateway#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetMeshOwner">resetMeshOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.putSpec"></a>

```java
public void putSpec(AppmeshVirtualGatewaySpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetId"></a>

```java
public void resetId()
```

##### `resetMeshOwner` <a name="resetMeshOwner" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetMeshOwner"></a>

```java
public void resetMeshOwner()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGateway;

AppmeshVirtualGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGateway;

AppmeshVirtualGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGateway;

AppmeshVirtualGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.resourceOwner">resourceOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference">AppmeshVirtualGatewaySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshNameInput">meshNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshOwnerInput">meshOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshName">meshName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshOwner">meshOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.lastUpdatedDate"></a>

```java
public java.lang.String getLastUpdatedDate();
```

- *Type:* java.lang.String

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.resourceOwner"></a>

```java
public java.lang.String getResourceOwner();
```

- *Type:* java.lang.String

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.spec"></a>

```java
public AppmeshVirtualGatewaySpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference">AppmeshVirtualGatewaySpecOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `meshNameInput`<sup>Optional</sup> <a name="meshNameInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshNameInput"></a>

```java
public java.lang.String getMeshNameInput();
```

- *Type:* java.lang.String

---

##### `meshOwnerInput`<sup>Optional</sup> <a name="meshOwnerInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshOwnerInput"></a>

```java
public java.lang.String getMeshOwnerInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.specInput"></a>

```java
public AppmeshVirtualGatewaySpec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshName"></a>

```java
public java.lang.String getMeshName();
```

- *Type:* java.lang.String

---

##### `meshOwner`<sup>Required</sup> <a name="meshOwner" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshOwner"></a>

```java
public java.lang.String getMeshOwner();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshVirtualGatewayConfig <a name="AppmeshVirtualGatewayConfig" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewayConfig;

AppmeshVirtualGatewayConfig.builder()
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
    .spec(AppmeshVirtualGatewaySpec)
//  .id(java.lang.String)
//  .meshOwner(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.meshName">meshName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_name AppmeshVirtualGateway#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#name AppmeshVirtualGateway#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#id AppmeshVirtualGateway#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.meshOwner">meshOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_owner AppmeshVirtualGateway#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags AppmeshVirtualGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags_all AppmeshVirtualGateway#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.meshName"></a>

```java
public java.lang.String getMeshName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_name AppmeshVirtualGateway#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#name AppmeshVirtualGateway#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.spec"></a>

```java
public AppmeshVirtualGatewaySpec getSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#spec AppmeshVirtualGateway#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#id AppmeshVirtualGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshOwner`<sup>Optional</sup> <a name="meshOwner" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.meshOwner"></a>

```java
public java.lang.String getMeshOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_owner AppmeshVirtualGateway#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags AppmeshVirtualGateway#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags_all AppmeshVirtualGateway#tags_all}.

---

### AppmeshVirtualGatewaySpec <a name="AppmeshVirtualGatewaySpec" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpec;

AppmeshVirtualGatewaySpec.builder()
    .listener(IResolvable)
    .listener(java.util.List<AppmeshVirtualGatewaySpecListener>)
//  .backendDefaults(AppmeshVirtualGatewaySpecBackendDefaults)
//  .logging(AppmeshVirtualGatewaySpecLogging)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.listener">listener</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a>></code> | listener block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.backendDefaults">backendDefaults</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a></code> | backend_defaults block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a></code> | logging block. |

---

##### `listener`<sup>Required</sup> <a name="listener" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.listener"></a>

```java
public java.lang.Object getListener();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a>>

listener block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#listener AppmeshVirtualGateway#listener}

---

##### `backendDefaults`<sup>Optional</sup> <a name="backendDefaults" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.backendDefaults"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaults getBackendDefaults();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a>

backend_defaults block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#backend_defaults AppmeshVirtualGateway#backend_defaults}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.logging"></a>

```java
public AppmeshVirtualGatewaySpecLogging getLogging();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#logging AppmeshVirtualGateway#logging}

---

### AppmeshVirtualGatewaySpecBackendDefaults <a name="AppmeshVirtualGatewaySpecBackendDefaults" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaults;

AppmeshVirtualGatewaySpecBackendDefaults.builder()
//  .clientPolicy(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults.property.clientPolicy">clientPolicy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a></code> | client_policy block. |

---

##### `clientPolicy`<sup>Optional</sup> <a name="clientPolicy" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults.property.clientPolicy"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy getClientPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a>

client_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#client_policy AppmeshVirtualGateway#client_policy}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy;

AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy.builder()
//  .tls(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a></code> | tls block. |

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy.property.tls"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls getTls();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a>

tls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tls AppmeshVirtualGateway#tls}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls;

AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.builder()
    .validation(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation)
//  .certificate(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate)
//  .enforce(java.lang.Boolean)
//  .enforce(IResolvable)
//  .ports(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.validation">validation</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a></code> | validation block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.enforce">enforce</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#enforce AppmeshVirtualGateway#enforce}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#ports AppmeshVirtualGateway#ports}. |

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.validation"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation getValidation();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a>

validation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#validation AppmeshVirtualGateway#validation}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.certificate"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate getCertificate();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate AppmeshVirtualGateway#certificate}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.enforce"></a>

```java
public java.lang.Object getEnforce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#enforce AppmeshVirtualGateway#enforce}.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#ports AppmeshVirtualGateway#ports}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate;

AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.builder()
//  .file(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile)
//  .sds(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a></code> | sds block. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.property.file"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile getFile();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

##### `sds`<sup>Optional</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.property.sds"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds getSds();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a>

sds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile;

AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.builder()
    .certificateChain(java.lang.String)
    .privateKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.property.certificateChain">certificateChain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#private_key AppmeshVirtualGateway#private_key}. |

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.property.certificateChain"></a>

```java
public java.lang.String getCertificateChain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}.

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#private_key AppmeshVirtualGateway#private_key}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds;

AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds.builder()
    .secretName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation;

AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.builder()
    .trust(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust)
//  .subjectAlternativeNames(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.property.trust">trust</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a></code> | trust block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a></code> | subject_alternative_names block. |

---

##### `trust`<sup>Required</sup> <a name="trust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.property.trust"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust getTrust();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a>

trust block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#trust AppmeshVirtualGateway#trust}

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.property.subjectAlternativeNames"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames getSubjectAlternativeNames();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a>

subject_alternative_names block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;

AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames.builder()
    .match(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a></code> | match block. |

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames.property.match"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#match AppmeshVirtualGateway#match}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;

AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch.builder()
    .exact(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch.property.exact">exact</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#exact AppmeshVirtualGateway#exact}. |

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch.property.exact"></a>

```java
public java.util.List<java.lang.String> getExact();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#exact AppmeshVirtualGateway#exact}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust;

AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.builder()
//  .acm(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm)
//  .file(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile)
//  .sds(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.acm">acm</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a></code> | acm block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a></code> | sds block. |

---

##### `acm`<sup>Optional</sup> <a name="acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.acm"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm getAcm();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a>

acm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#acm AppmeshVirtualGateway#acm}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.file"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile getFile();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

##### `sds`<sup>Optional</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.sds"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds getSds();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a>

sds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm;

AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.builder()
    .certificateAuthorityArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.property.certificateAuthorityArns">certificateAuthorityArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_authority_arns AppmeshVirtualGateway#certificate_authority_arns}. |

---

##### `certificateAuthorityArns`<sup>Required</sup> <a name="certificateAuthorityArns" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.property.certificateAuthorityArns"></a>

```java
public java.util.List<java.lang.String> getCertificateAuthorityArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_authority_arns AppmeshVirtualGateway#certificate_authority_arns}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile;

AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.builder()
    .certificateChain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.property.certificateChain">certificateChain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}. |

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.property.certificateChain"></a>

```java
public java.lang.String getCertificateChain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds;

AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds.builder()
    .secretName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}.

---

### AppmeshVirtualGatewaySpecListener <a name="AppmeshVirtualGatewaySpecListener" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListener;

AppmeshVirtualGatewaySpecListener.builder()
    .portMapping(AppmeshVirtualGatewaySpecListenerPortMapping)
//  .connectionPool(AppmeshVirtualGatewaySpecListenerConnectionPool)
//  .healthCheck(AppmeshVirtualGatewaySpecListenerHealthCheck)
//  .tls(AppmeshVirtualGatewaySpecListenerTls)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.portMapping">portMapping</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a></code> | port_mapping block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.connectionPool">connectionPool</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a></code> | connection_pool block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a></code> | tls block. |

---

##### `portMapping`<sup>Required</sup> <a name="portMapping" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.portMapping"></a>

```java
public AppmeshVirtualGatewaySpecListenerPortMapping getPortMapping();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a>

port_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#port_mapping AppmeshVirtualGateway#port_mapping}

---

##### `connectionPool`<sup>Optional</sup> <a name="connectionPool" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.connectionPool"></a>

```java
public AppmeshVirtualGatewaySpecListenerConnectionPool getConnectionPool();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a>

connection_pool block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#connection_pool AppmeshVirtualGateway#connection_pool}

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.healthCheck"></a>

```java
public AppmeshVirtualGatewaySpecListenerHealthCheck getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#health_check AppmeshVirtualGateway#health_check}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.tls"></a>

```java
public AppmeshVirtualGatewaySpecListenerTls getTls();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a>

tls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tls AppmeshVirtualGateway#tls}

---

### AppmeshVirtualGatewaySpecListenerConnectionPool <a name="AppmeshVirtualGatewaySpecListenerConnectionPool" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerConnectionPool;

AppmeshVirtualGatewaySpecListenerConnectionPool.builder()
//  .grpc(AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc)
//  .http(AppmeshVirtualGatewaySpecListenerConnectionPoolHttp)
//  .http2(AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.grpc">grpc</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a></code> | grpc block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.http">http</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a></code> | http block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.http2">http2</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a></code> | http2 block. |

---

##### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.grpc"></a>

```java
public AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc getGrpc();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#grpc AppmeshVirtualGateway#grpc}

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.http"></a>

```java
public AppmeshVirtualGatewaySpecListenerConnectionPoolHttp getHttp();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a>

http block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#http AppmeshVirtualGateway#http}

---

##### `http2`<sup>Optional</sup> <a name="http2" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.http2"></a>

```java
public AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 getHttp2();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a>

http2 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#http2 AppmeshVirtualGateway#http2}

---

### AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc;

AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc.builder()
    .maxRequests(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc.property.maxRequests">maxRequests</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_requests AppmeshVirtualGateway#max_requests}. |

---

##### `maxRequests`<sup>Required</sup> <a name="maxRequests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc.property.maxRequests"></a>

```java
public java.lang.Number getMaxRequests();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_requests AppmeshVirtualGateway#max_requests}.

---

### AppmeshVirtualGatewaySpecListenerConnectionPoolHttp <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolHttp" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp;

AppmeshVirtualGatewaySpecListenerConnectionPoolHttp.builder()
    .maxConnections(java.lang.Number)
//  .maxPendingRequests(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_connections AppmeshVirtualGateway#max_connections}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp.property.maxPendingRequests">maxPendingRequests</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_pending_requests AppmeshVirtualGateway#max_pending_requests}. |

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_connections AppmeshVirtualGateway#max_connections}.

---

##### `maxPendingRequests`<sup>Optional</sup> <a name="maxPendingRequests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp.property.maxPendingRequests"></a>

```java
public java.lang.Number getMaxPendingRequests();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_pending_requests AppmeshVirtualGateway#max_pending_requests}.

---

### AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2;

AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2.builder()
    .maxRequests(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2.property.maxRequests">maxRequests</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_requests AppmeshVirtualGateway#max_requests}. |

---

##### `maxRequests`<sup>Required</sup> <a name="maxRequests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2.property.maxRequests"></a>

```java
public java.lang.Number getMaxRequests();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_requests AppmeshVirtualGateway#max_requests}.

---

### AppmeshVirtualGatewaySpecListenerHealthCheck <a name="AppmeshVirtualGatewaySpecListenerHealthCheck" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerHealthCheck;

AppmeshVirtualGatewaySpecListenerHealthCheck.builder()
    .healthyThreshold(java.lang.Number)
    .intervalMillis(java.lang.Number)
    .protocol(java.lang.String)
    .timeoutMillis(java.lang.Number)
    .unhealthyThreshold(java.lang.Number)
//  .path(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#healthy_threshold AppmeshVirtualGateway#healthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.intervalMillis">intervalMillis</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#interval_millis AppmeshVirtualGateway#interval_millis}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#protocol AppmeshVirtualGateway#protocol}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.timeoutMillis">timeoutMillis</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#timeout_millis AppmeshVirtualGateway#timeout_millis}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#unhealthy_threshold AppmeshVirtualGateway#unhealthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#path AppmeshVirtualGateway#path}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#port AppmeshVirtualGateway#port}. |

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#healthy_threshold AppmeshVirtualGateway#healthy_threshold}.

---

##### `intervalMillis`<sup>Required</sup> <a name="intervalMillis" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.intervalMillis"></a>

```java
public java.lang.Number getIntervalMillis();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#interval_millis AppmeshVirtualGateway#interval_millis}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#protocol AppmeshVirtualGateway#protocol}.

---

##### `timeoutMillis`<sup>Required</sup> <a name="timeoutMillis" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.timeoutMillis"></a>

```java
public java.lang.Number getTimeoutMillis();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#timeout_millis AppmeshVirtualGateway#timeout_millis}.

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#unhealthy_threshold AppmeshVirtualGateway#unhealthy_threshold}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#path AppmeshVirtualGateway#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#port AppmeshVirtualGateway#port}.

---

### AppmeshVirtualGatewaySpecListenerPortMapping <a name="AppmeshVirtualGatewaySpecListenerPortMapping" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerPortMapping;

AppmeshVirtualGatewaySpecListenerPortMapping.builder()
    .port(java.lang.Number)
    .protocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#port AppmeshVirtualGateway#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#protocol AppmeshVirtualGateway#protocol}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#port AppmeshVirtualGateway#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#protocol AppmeshVirtualGateway#protocol}.

---

### AppmeshVirtualGatewaySpecListenerTls <a name="AppmeshVirtualGatewaySpecListenerTls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTls;

AppmeshVirtualGatewaySpecListenerTls.builder()
    .certificate(AppmeshVirtualGatewaySpecListenerTlsCertificate)
    .mode(java.lang.String)
//  .validation(AppmeshVirtualGatewaySpecListenerTlsValidation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mode AppmeshVirtualGateway#mode}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.validation">validation</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a></code> | validation block. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.certificate"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsCertificate getCertificate();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate AppmeshVirtualGateway#certificate}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mode AppmeshVirtualGateway#mode}.

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.validation"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidation getValidation();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a>

validation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#validation AppmeshVirtualGateway#validation}

---

### AppmeshVirtualGatewaySpecListenerTlsCertificate <a name="AppmeshVirtualGatewaySpecListenerTlsCertificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsCertificate;

AppmeshVirtualGatewaySpecListenerTlsCertificate.builder()
//  .acm(AppmeshVirtualGatewaySpecListenerTlsCertificateAcm)
//  .file(AppmeshVirtualGatewaySpecListenerTlsCertificateFile)
//  .sds(AppmeshVirtualGatewaySpecListenerTlsCertificateSds)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.acm">acm</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a></code> | acm block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a></code> | sds block. |

---

##### `acm`<sup>Optional</sup> <a name="acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.acm"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsCertificateAcm getAcm();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a>

acm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#acm AppmeshVirtualGateway#acm}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.file"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsCertificateFile getFile();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

##### `sds`<sup>Optional</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.sds"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsCertificateSds getSds();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a>

sds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}

---

### AppmeshVirtualGatewaySpecListenerTlsCertificateAcm <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateAcm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm;

AppmeshVirtualGatewaySpecListenerTlsCertificateAcm.builder()
    .certificateArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_arn AppmeshVirtualGateway#certificate_arn}. |

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_arn AppmeshVirtualGateway#certificate_arn}.

---

### AppmeshVirtualGatewaySpecListenerTlsCertificateFile <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile;

AppmeshVirtualGatewaySpecListenerTlsCertificateFile.builder()
    .certificateChain(java.lang.String)
    .privateKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile.property.certificateChain">certificateChain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#private_key AppmeshVirtualGateway#private_key}. |

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile.property.certificateChain"></a>

```java
public java.lang.String getCertificateChain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}.

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#private_key AppmeshVirtualGateway#private_key}.

---

### AppmeshVirtualGatewaySpecListenerTlsCertificateSds <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds;

AppmeshVirtualGatewaySpecListenerTlsCertificateSds.builder()
    .secretName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}.

---

### AppmeshVirtualGatewaySpecListenerTlsValidation <a name="AppmeshVirtualGatewaySpecListenerTlsValidation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsValidation;

AppmeshVirtualGatewaySpecListenerTlsValidation.builder()
    .trust(AppmeshVirtualGatewaySpecListenerTlsValidationTrust)
//  .subjectAlternativeNames(AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation.property.trust">trust</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a></code> | trust block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a></code> | subject_alternative_names block. |

---

##### `trust`<sup>Required</sup> <a name="trust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation.property.trust"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationTrust getTrust();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a>

trust block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#trust AppmeshVirtualGateway#trust}

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation.property.subjectAlternativeNames"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames getSubjectAlternativeNames();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a>

subject_alternative_names block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}

---

### AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames <a name="AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames;

AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames.builder()
    .match(AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a></code> | match block. |

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames.property.match"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#match AppmeshVirtualGateway#match}

---

### AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch <a name="AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch;

AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch.builder()
    .exact(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch.property.exact">exact</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#exact AppmeshVirtualGateway#exact}. |

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch.property.exact"></a>

```java
public java.util.List<java.lang.String> getExact();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#exact AppmeshVirtualGateway#exact}.

---

### AppmeshVirtualGatewaySpecListenerTlsValidationTrust <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust;

AppmeshVirtualGatewaySpecListenerTlsValidationTrust.builder()
//  .file(AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile)
//  .sds(AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a></code> | sds block. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust.property.file"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile getFile();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

##### `sds`<sup>Optional</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust.property.sds"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds getSds();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a>

sds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}

---

### AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile;

AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile.builder()
    .certificateChain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile.property.certificateChain">certificateChain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}. |

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile.property.certificateChain"></a>

```java
public java.lang.String getCertificateChain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}.

---

### AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds;

AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds.builder()
    .secretName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}.

---

### AppmeshVirtualGatewaySpecLogging <a name="AppmeshVirtualGatewaySpecLogging" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecLogging;

AppmeshVirtualGatewaySpecLogging.builder()
//  .accessLog(AppmeshVirtualGatewaySpecLoggingAccessLog)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging.property.accessLog">accessLog</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a></code> | access_log block. |

---

##### `accessLog`<sup>Optional</sup> <a name="accessLog" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging.property.accessLog"></a>

```java
public AppmeshVirtualGatewaySpecLoggingAccessLog getAccessLog();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a>

access_log block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#access_log AppmeshVirtualGateway#access_log}

---

### AppmeshVirtualGatewaySpecLoggingAccessLog <a name="AppmeshVirtualGatewaySpecLoggingAccessLog" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecLoggingAccessLog;

AppmeshVirtualGatewaySpecLoggingAccessLog.builder()
//  .file(AppmeshVirtualGatewaySpecLoggingAccessLogFile)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a></code> | file block. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog.property.file"></a>

```java
public AppmeshVirtualGatewaySpecLoggingAccessLogFile getFile();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

### AppmeshVirtualGatewaySpecLoggingAccessLogFile <a name="AppmeshVirtualGatewaySpecLoggingAccessLogFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile;

AppmeshVirtualGatewaySpecLoggingAccessLogFile.builder()
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#path AppmeshVirtualGateway#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#path AppmeshVirtualGateway#path}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference;

new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.putTls">putTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resetTls">resetTls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTls` <a name="putTls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.putTls"></a>

```java
public void putTls(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a>

---

##### `resetTls` <a name="resetTls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resetTls"></a>

```java
public void resetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.tlsInput">tlsInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.tls"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference getTls();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference</a>

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.tlsInput"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls getTlsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference;

new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.certificateChainInput">certificateChainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.certificateChain">certificateChain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateChainInput`<sup>Optional</sup> <a name="certificateChainInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.certificateChainInput"></a>

```java
public java.lang.String getCertificateChainInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.certificateChain"></a>

```java
public java.lang.String getCertificateChain();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference;

new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putFile">putFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putSds">putSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resetFile">resetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resetSds">resetSds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFile` <a name="putFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putFile"></a>

```java
public void putFile(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a>

---

##### `putSds` <a name="putSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putSds"></a>

```java
public void putSds(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putSds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a>

---

##### `resetFile` <a name="resetFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resetFile"></a>

```java
public void resetFile()
```

##### `resetSds` <a name="resetSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resetSds"></a>

```java
public void resetSds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.fileInput">fileInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.sdsInput">sdsInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.file"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference getFile();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference</a>

---

##### `sds`<sup>Required</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.sds"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference getSds();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference</a>

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.fileInput"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile getFileInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a>

---

##### `sdsInput`<sup>Optional</sup> <a name="sdsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.sdsInput"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds getSdsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference;

new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference;

new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putCertificate">putCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putValidation">putValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetEnforce">resetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificate` <a name="putCertificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putCertificate"></a>

```java
public void putCertificate(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a>

---

##### `putValidation` <a name="putValidation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putValidation"></a>

```java
public void putValidation(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putValidation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a>

---

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetEnforce` <a name="resetEnforce" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetEnforce"></a>

```java
public void resetEnforce()
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetPorts"></a>

```java
public void resetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.validation">validation</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.certificateInput">certificateInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.enforceInput">enforceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.validationInput">validationInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.enforce">enforce</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.certificate"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference getCertificate();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference</a>

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.validation"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference getValidation();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.certificateInput"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate getCertificateInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a>

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.enforceInput"></a>

```java
public java.lang.Object getEnforceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.Number> getPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `validationInput`<sup>Optional</sup> <a name="validationInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.validationInput"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation getValidationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a>

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.enforce"></a>

```java
public java.lang.Object getEnforce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference;

new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putSubjectAlternativeNames">putSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putTrust">putTrust</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resetSubjectAlternativeNames">resetSubjectAlternativeNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubjectAlternativeNames` <a name="putSubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putSubjectAlternativeNames"></a>

```java
public void putSubjectAlternativeNames(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putSubjectAlternativeNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a>

---

##### `putTrust` <a name="putTrust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putTrust"></a>

```java
public void putTrust(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putTrust.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a>

---

##### `resetSubjectAlternativeNames` <a name="resetSubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resetSubjectAlternativeNames"></a>

```java
public void resetSubjectAlternativeNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.trust">trust</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.subjectAlternativeNamesInput">subjectAlternativeNamesInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.trustInput">trustInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.subjectAlternativeNames"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference getSubjectAlternativeNames();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference</a>

---

##### `trust`<sup>Required</sup> <a name="trust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.trust"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference getTrust();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference</a>

---

##### `subjectAlternativeNamesInput`<sup>Optional</sup> <a name="subjectAlternativeNamesInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.subjectAlternativeNamesInput"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames getSubjectAlternativeNamesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a>

---

##### `trustInput`<sup>Optional</sup> <a name="trustInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.trustInput"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust getTrustInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference;

new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exactInput">exactInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact">exact</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exactInput"></a>

```java
public java.util.List<java.lang.String> getExactInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact"></a>

```java
public java.util.List<java.lang.String> getExact();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference;

new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.putMatch">putMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.putMatch"></a>

```java
public void putMatch(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.match"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.matchInput"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference;

new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.certificateAuthorityArnsInput">certificateAuthorityArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.certificateAuthorityArns">certificateAuthorityArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateAuthorityArnsInput`<sup>Optional</sup> <a name="certificateAuthorityArnsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.certificateAuthorityArnsInput"></a>

```java
public java.util.List<java.lang.String> getCertificateAuthorityArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificateAuthorityArns`<sup>Required</sup> <a name="certificateAuthorityArns" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.certificateAuthorityArns"></a>

```java
public java.util.List<java.lang.String> getCertificateAuthorityArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference;

new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.certificateChainInput">certificateChainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.certificateChain">certificateChain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateChainInput`<sup>Optional</sup> <a name="certificateChainInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.certificateChainInput"></a>

```java
public java.lang.String getCertificateChainInput();
```

- *Type:* java.lang.String

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.certificateChain"></a>

```java
public java.lang.String getCertificateChain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference;

new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putAcm">putAcm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putFile">putFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putSds">putSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetAcm">resetAcm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetFile">resetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetSds">resetSds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcm` <a name="putAcm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putAcm"></a>

```java
public void putAcm(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putAcm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a>

---

##### `putFile` <a name="putFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putFile"></a>

```java
public void putFile(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a>

---

##### `putSds` <a name="putSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putSds"></a>

```java
public void putSds(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putSds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a>

---

##### `resetAcm` <a name="resetAcm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetAcm"></a>

```java
public void resetAcm()
```

##### `resetFile` <a name="resetFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetFile"></a>

```java
public void resetFile()
```

##### `resetSds` <a name="resetSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetSds"></a>

```java
public void resetSds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.acm">acm</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.acmInput">acmInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.fileInput">fileInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.sdsInput">sdsInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acm`<sup>Required</sup> <a name="acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.acm"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference getAcm();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference</a>

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.file"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference getFile();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference</a>

---

##### `sds`<sup>Required</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.sds"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference getSds();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference</a>

---

##### `acmInput`<sup>Optional</sup> <a name="acmInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.acmInput"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm getAcmInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a>

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.fileInput"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile getFileInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a>

---

##### `sdsInput`<sup>Optional</sup> <a name="sdsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.sdsInput"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds getSdsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference;

new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference;

new AppmeshVirtualGatewaySpecBackendDefaultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.putClientPolicy">putClientPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resetClientPolicy">resetClientPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientPolicy` <a name="putClientPolicy" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.putClientPolicy"></a>

```java
public void putClientPolicy(AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.putClientPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a>

---

##### `resetClientPolicy` <a name="resetClientPolicy" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resetClientPolicy"></a>

```java
public void resetClientPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.clientPolicy">clientPolicy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.clientPolicyInput">clientPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientPolicy`<sup>Required</sup> <a name="clientPolicy" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.clientPolicy"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference getClientPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference</a>

---

##### `clientPolicyInput`<sup>Optional</sup> <a name="clientPolicyInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.clientPolicyInput"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy getClientPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaults getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a>

---


### AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference;

new AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.maxRequestsInput">maxRequestsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.maxRequests">maxRequests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxRequestsInput`<sup>Optional</sup> <a name="maxRequestsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.maxRequestsInput"></a>

```java
public java.lang.Number getMaxRequestsInput();
```

- *Type:* java.lang.Number

---

##### `maxRequests`<sup>Required</sup> <a name="maxRequests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.maxRequests"></a>

```java
public java.lang.Number getMaxRequests();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a>

---


### AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference;

new AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.maxRequestsInput">maxRequestsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.maxRequests">maxRequests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxRequestsInput`<sup>Optional</sup> <a name="maxRequestsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.maxRequestsInput"></a>

```java
public java.lang.Number getMaxRequestsInput();
```

- *Type:* java.lang.Number

---

##### `maxRequests`<sup>Required</sup> <a name="maxRequests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.maxRequests"></a>

```java
public java.lang.Number getMaxRequests();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a>

---


### AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference;

new AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resetMaxPendingRequests">resetMaxPendingRequests</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxPendingRequests` <a name="resetMaxPendingRequests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resetMaxPendingRequests"></a>

```java
public void resetMaxPendingRequests()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxPendingRequestsInput">maxPendingRequestsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxPendingRequests">maxPendingRequests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxConnectionsInput"></a>

```java
public java.lang.Number getMaxConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxPendingRequestsInput`<sup>Optional</sup> <a name="maxPendingRequestsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxPendingRequestsInput"></a>

```java
public java.lang.Number getMaxPendingRequestsInput();
```

- *Type:* java.lang.Number

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

---

##### `maxPendingRequests`<sup>Required</sup> <a name="maxPendingRequests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxPendingRequests"></a>

```java
public java.lang.Number getMaxPendingRequests();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecListenerConnectionPoolHttp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a>

---


### AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference;

new AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putGrpc">putGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp">putHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp2">putHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetGrpc">resetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetHttp">resetHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetHttp2">resetHttp2</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrpc` <a name="putGrpc" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putGrpc"></a>

```java
public void putGrpc(AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a>

---

##### `putHttp` <a name="putHttp" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp"></a>

```java
public void putHttp(AppmeshVirtualGatewaySpecListenerConnectionPoolHttp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a>

---

##### `putHttp2` <a name="putHttp2" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp2"></a>

```java
public void putHttp2(AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a>

---

##### `resetGrpc` <a name="resetGrpc" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetGrpc"></a>

```java
public void resetGrpc()
```

##### `resetHttp` <a name="resetHttp" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetHttp"></a>

```java
public void resetHttp()
```

##### `resetHttp2` <a name="resetHttp2" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetHttp2"></a>

```java
public void resetHttp2()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http">http</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http2">http2</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.grpcInput">grpcInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http2Input">http2Input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.httpInput">httpInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.grpc"></a>

```java
public AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference getGrpc();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http"></a>

```java
public AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference getHttp();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference</a>

---

##### `http2`<sup>Required</sup> <a name="http2" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http2"></a>

```java
public AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference getHttp2();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference</a>

---

##### `grpcInput`<sup>Optional</sup> <a name="grpcInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.grpcInput"></a>

```java
public AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc getGrpcInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a>

---

##### `http2Input`<sup>Optional</sup> <a name="http2Input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http2Input"></a>

```java
public AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 getHttp2Input();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a>

---

##### `httpInput`<sup>Optional</sup> <a name="httpInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.httpInput"></a>

```java
public AppmeshVirtualGatewaySpecListenerConnectionPoolHttp getHttpInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecListenerConnectionPool getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a>

---


### AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference <a name="AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference;

new AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.intervalMillisInput">intervalMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.timeoutMillisInput">timeoutMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.intervalMillis">intervalMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.timeoutMillis">timeoutMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.healthyThresholdInput"></a>

```java
public java.lang.Number getHealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `intervalMillisInput`<sup>Optional</sup> <a name="intervalMillisInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.intervalMillisInput"></a>

```java
public java.lang.Number getIntervalMillisInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `timeoutMillisInput`<sup>Optional</sup> <a name="timeoutMillisInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.timeoutMillisInput"></a>

```java
public java.lang.Number getTimeoutMillisInput();
```

- *Type:* java.lang.Number

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```java
public java.lang.Number getUnhealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `intervalMillis`<sup>Required</sup> <a name="intervalMillis" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.intervalMillis"></a>

```java
public java.lang.Number getIntervalMillis();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `timeoutMillis`<sup>Required</sup> <a name="timeoutMillis" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.timeoutMillis"></a>

```java
public java.lang.Number getTimeoutMillis();
```

- *Type:* java.lang.Number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecListenerHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a>

---


### AppmeshVirtualGatewaySpecListenerList <a name="AppmeshVirtualGatewaySpecListenerList" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerList;

new AppmeshVirtualGatewaySpecListenerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.get"></a>

```java
public AppmeshVirtualGatewaySpecListenerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a>>

---


### AppmeshVirtualGatewaySpecListenerOutputReference <a name="AppmeshVirtualGatewaySpecListenerOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerOutputReference;

new AppmeshVirtualGatewaySpecListenerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putConnectionPool">putConnectionPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putPortMapping">putPortMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putTls">putTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetConnectionPool">resetConnectionPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetTls">resetTls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnectionPool` <a name="putConnectionPool" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putConnectionPool"></a>

```java
public void putConnectionPool(AppmeshVirtualGatewaySpecListenerConnectionPool value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putConnectionPool.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a>

---

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putHealthCheck"></a>

```java
public void putHealthCheck(AppmeshVirtualGatewaySpecListenerHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a>

---

##### `putPortMapping` <a name="putPortMapping" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putPortMapping"></a>

```java
public void putPortMapping(AppmeshVirtualGatewaySpecListenerPortMapping value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putPortMapping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a>

---

##### `putTls` <a name="putTls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putTls"></a>

```java
public void putTls(AppmeshVirtualGatewaySpecListenerTls value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a>

---

##### `resetConnectionPool` <a name="resetConnectionPool" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetConnectionPool"></a>

```java
public void resetConnectionPool()
```

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetHealthCheck"></a>

```java
public void resetHealthCheck()
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetTls"></a>

```java
public void resetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.connectionPool">connectionPool</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference">AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.portMapping">portMapping</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference">AppmeshVirtualGatewaySpecListenerPortMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference">AppmeshVirtualGatewaySpecListenerTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.connectionPoolInput">connectionPoolInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.healthCheckInput">healthCheckInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.portMappingInput">portMappingInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.tlsInput">tlsInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionPool`<sup>Required</sup> <a name="connectionPool" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.connectionPool"></a>

```java
public AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference getConnectionPool();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference</a>

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.healthCheck"></a>

```java
public AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference">AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference</a>

---

##### `portMapping`<sup>Required</sup> <a name="portMapping" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.portMapping"></a>

```java
public AppmeshVirtualGatewaySpecListenerPortMappingOutputReference getPortMapping();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference">AppmeshVirtualGatewaySpecListenerPortMappingOutputReference</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.tls"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsOutputReference getTls();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference">AppmeshVirtualGatewaySpecListenerTlsOutputReference</a>

---

##### `connectionPoolInput`<sup>Optional</sup> <a name="connectionPoolInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.connectionPoolInput"></a>

```java
public AppmeshVirtualGatewaySpecListenerConnectionPool getConnectionPoolInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a>

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.healthCheckInput"></a>

```java
public AppmeshVirtualGatewaySpecListenerHealthCheck getHealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a>

---

##### `portMappingInput`<sup>Optional</sup> <a name="portMappingInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.portMappingInput"></a>

```java
public AppmeshVirtualGatewaySpecListenerPortMapping getPortMappingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a>

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.tlsInput"></a>

```java
public AppmeshVirtualGatewaySpecListenerTls getTlsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a> OR com.hashicorp.cdktf.IResolvable

---


### AppmeshVirtualGatewaySpecListenerPortMappingOutputReference <a name="AppmeshVirtualGatewaySpecListenerPortMappingOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference;

new AppmeshVirtualGatewaySpecListenerPortMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecListenerPortMapping getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a>

---


### AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference;

new AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsCertificateAcm getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a>

---


### AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference;

new AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.certificateChainInput">certificateChainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.certificateChain">certificateChain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateChainInput`<sup>Optional</sup> <a name="certificateChainInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.certificateChainInput"></a>

```java
public java.lang.String getCertificateChainInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.certificateChain"></a>

```java
public java.lang.String getCertificateChain();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsCertificateFile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a>

---


### AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference;

new AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putAcm">putAcm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putFile">putFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putSds">putSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetAcm">resetAcm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetFile">resetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetSds">resetSds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcm` <a name="putAcm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putAcm"></a>

```java
public void putAcm(AppmeshVirtualGatewaySpecListenerTlsCertificateAcm value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putAcm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a>

---

##### `putFile` <a name="putFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putFile"></a>

```java
public void putFile(AppmeshVirtualGatewaySpecListenerTlsCertificateFile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a>

---

##### `putSds` <a name="putSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putSds"></a>

```java
public void putSds(AppmeshVirtualGatewaySpecListenerTlsCertificateSds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putSds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a>

---

##### `resetAcm` <a name="resetAcm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetAcm"></a>

```java
public void resetAcm()
```

##### `resetFile` <a name="resetFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetFile"></a>

```java
public void resetFile()
```

##### `resetSds` <a name="resetSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetSds"></a>

```java
public void resetSds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.acm">acm</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.acmInput">acmInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.fileInput">fileInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.sdsInput">sdsInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acm`<sup>Required</sup> <a name="acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.acm"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference getAcm();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference</a>

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.file"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference getFile();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference</a>

---

##### `sds`<sup>Required</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.sds"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference getSds();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference</a>

---

##### `acmInput`<sup>Optional</sup> <a name="acmInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.acmInput"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsCertificateAcm getAcmInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a>

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.fileInput"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsCertificateFile getFileInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a>

---

##### `sdsInput`<sup>Optional</sup> <a name="sdsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.sdsInput"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsCertificateSds getSdsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsCertificate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a>

---


### AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference;

new AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsCertificateSds getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a>

---


### AppmeshVirtualGatewaySpecListenerTlsOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference;

new AppmeshVirtualGatewaySpecListenerTlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putCertificate">putCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putValidation">putValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.resetValidation">resetValidation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificate` <a name="putCertificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putCertificate"></a>

```java
public void putCertificate(AppmeshVirtualGatewaySpecListenerTlsCertificate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a>

---

##### `putValidation` <a name="putValidation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putValidation"></a>

```java
public void putValidation(AppmeshVirtualGatewaySpecListenerTlsValidation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putValidation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a>

---

##### `resetValidation` <a name="resetValidation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.resetValidation"></a>

```java
public void resetValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.validation">validation</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.certificateInput">certificateInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.validationInput">validationInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.certificate"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference getCertificate();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference</a>

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.validation"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference getValidation();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.certificateInput"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsCertificate getCertificateInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `validationInput`<sup>Optional</sup> <a name="validationInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.validationInput"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidation getValidationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecListenerTls getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference;

new AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putSubjectAlternativeNames">putSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putTrust">putTrust</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resetSubjectAlternativeNames">resetSubjectAlternativeNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubjectAlternativeNames` <a name="putSubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putSubjectAlternativeNames"></a>

```java
public void putSubjectAlternativeNames(AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putSubjectAlternativeNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a>

---

##### `putTrust` <a name="putTrust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putTrust"></a>

```java
public void putTrust(AppmeshVirtualGatewaySpecListenerTlsValidationTrust value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putTrust.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a>

---

##### `resetSubjectAlternativeNames` <a name="resetSubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resetSubjectAlternativeNames"></a>

```java
public void resetSubjectAlternativeNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.trust">trust</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.subjectAlternativeNamesInput">subjectAlternativeNamesInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.trustInput">trustInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.subjectAlternativeNames"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference getSubjectAlternativeNames();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference</a>

---

##### `trust`<sup>Required</sup> <a name="trust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.trust"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference getTrust();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference</a>

---

##### `subjectAlternativeNamesInput`<sup>Optional</sup> <a name="subjectAlternativeNamesInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.subjectAlternativeNamesInput"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames getSubjectAlternativeNamesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a>

---

##### `trustInput`<sup>Optional</sup> <a name="trustInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.trustInput"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationTrust getTrustInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference;

new AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exactInput">exactInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact">exact</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exactInput"></a>

```java
public java.util.List<java.lang.String> getExactInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact"></a>

```java
public java.util.List<java.lang.String> getExact();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference;

new AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.putMatch">putMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.putMatch"></a>

```java
public void putMatch(AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.match"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.matchInput"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference;

new AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.certificateChainInput">certificateChainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.certificateChain">certificateChain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateChainInput`<sup>Optional</sup> <a name="certificateChainInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.certificateChainInput"></a>

```java
public java.lang.String getCertificateChainInput();
```

- *Type:* java.lang.String

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.certificateChain"></a>

```java
public java.lang.String getCertificateChain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference;

new AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putFile">putFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putSds">putSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resetFile">resetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resetSds">resetSds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFile` <a name="putFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putFile"></a>

```java
public void putFile(AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a>

---

##### `putSds` <a name="putSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putSds"></a>

```java
public void putSds(AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putSds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a>

---

##### `resetFile` <a name="resetFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resetFile"></a>

```java
public void resetFile()
```

##### `resetSds` <a name="resetSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resetSds"></a>

```java
public void resetSds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.fileInput">fileInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.sdsInput">sdsInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.file"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference getFile();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference</a>

---

##### `sds`<sup>Required</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.sds"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference getSds();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference</a>

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.fileInput"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile getFileInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a>

---

##### `sdsInput`<sup>Optional</sup> <a name="sdsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.sdsInput"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds getSdsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationTrust getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference;

new AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a>

---


### AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference <a name="AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference;

new AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecLoggingAccessLogFile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a>

---


### AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference <a name="AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference;

new AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.putFile">putFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resetFile">resetFile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFile` <a name="putFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.putFile"></a>

```java
public void putFile(AppmeshVirtualGatewaySpecLoggingAccessLogFile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a>

---

##### `resetFile` <a name="resetFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resetFile"></a>

```java
public void resetFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference">AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.fileInput">fileInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.file"></a>

```java
public AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference getFile();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference">AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference</a>

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.fileInput"></a>

```java
public AppmeshVirtualGatewaySpecLoggingAccessLogFile getFileInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecLoggingAccessLog getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a>

---


### AppmeshVirtualGatewaySpecLoggingOutputReference <a name="AppmeshVirtualGatewaySpecLoggingOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecLoggingOutputReference;

new AppmeshVirtualGatewaySpecLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.putAccessLog">putAccessLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.resetAccessLog">resetAccessLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessLog` <a name="putAccessLog" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.putAccessLog"></a>

```java
public void putAccessLog(AppmeshVirtualGatewaySpecLoggingAccessLog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.putAccessLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a>

---

##### `resetAccessLog` <a name="resetAccessLog" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.resetAccessLog"></a>

```java
public void resetAccessLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.accessLog">accessLog</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference">AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.accessLogInput">accessLogInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLog`<sup>Required</sup> <a name="accessLog" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.accessLog"></a>

```java
public AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference getAccessLog();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference">AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference</a>

---

##### `accessLogInput`<sup>Optional</sup> <a name="accessLogInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.accessLogInput"></a>

```java
public AppmeshVirtualGatewaySpecLoggingAccessLog getAccessLogInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpecLogging getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a>

---


### AppmeshVirtualGatewaySpecOutputReference <a name="AppmeshVirtualGatewaySpecOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_virtual_gateway.AppmeshVirtualGatewaySpecOutputReference;

new AppmeshVirtualGatewaySpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putBackendDefaults">putBackendDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putListener">putListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resetBackendDefaults">resetBackendDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resetLogging">resetLogging</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackendDefaults` <a name="putBackendDefaults" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putBackendDefaults"></a>

```java
public void putBackendDefaults(AppmeshVirtualGatewaySpecBackendDefaults value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putBackendDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a>

---

##### `putListener` <a name="putListener" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putListener"></a>

```java
public void putListener(IResolvable OR java.util.List<AppmeshVirtualGatewaySpecListener> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putListener.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a>>

---

##### `putLogging` <a name="putLogging" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putLogging"></a>

```java
public void putLogging(AppmeshVirtualGatewaySpecLogging value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a>

---

##### `resetBackendDefaults` <a name="resetBackendDefaults" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resetBackendDefaults"></a>

```java
public void resetBackendDefaults()
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resetLogging"></a>

```java
public void resetLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.backendDefaults">backendDefaults</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.listener">listener</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList">AppmeshVirtualGatewaySpecListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference">AppmeshVirtualGatewaySpecLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.backendDefaultsInput">backendDefaultsInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.listenerInput">listenerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.loggingInput">loggingInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendDefaults`<sup>Required</sup> <a name="backendDefaults" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.backendDefaults"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaultsOutputReference getBackendDefaults();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsOutputReference</a>

---

##### `listener`<sup>Required</sup> <a name="listener" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.listener"></a>

```java
public AppmeshVirtualGatewaySpecListenerList getListener();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList">AppmeshVirtualGatewaySpecListenerList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.logging"></a>

```java
public AppmeshVirtualGatewaySpecLoggingOutputReference getLogging();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference">AppmeshVirtualGatewaySpecLoggingOutputReference</a>

---

##### `backendDefaultsInput`<sup>Optional</sup> <a name="backendDefaultsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.backendDefaultsInput"></a>

```java
public AppmeshVirtualGatewaySpecBackendDefaults getBackendDefaultsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a>

---

##### `listenerInput`<sup>Optional</sup> <a name="listenerInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.listenerInput"></a>

```java
public java.lang.Object getListenerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a>>

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.loggingInput"></a>

```java
public AppmeshVirtualGatewaySpecLogging getLoggingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.internalValue"></a>

```java
public AppmeshVirtualGatewaySpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a>

---



