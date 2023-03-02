# `appmeshGatewayRoute` Submodule <a name="`appmeshGatewayRoute` Submodule" id="@cdktf/provider-aws.appmeshGatewayRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshGatewayRoute <a name="AppmeshGatewayRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route aws_appmesh_gateway_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRoute;

AppmeshGatewayRoute.Builder.create(Construct scope, java.lang.String id)
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
    .spec(AppmeshGatewayRouteSpec)
    .virtualGatewayName(java.lang.String)
//  .id(java.lang.String)
//  .meshOwner(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.meshName">meshName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_name AppmeshGatewayRoute#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#name AppmeshGatewayRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.virtualGatewayName">virtualGatewayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#id AppmeshGatewayRoute#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.meshOwner">meshOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_owner AppmeshGatewayRoute#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags AppmeshGatewayRoute#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags_all AppmeshGatewayRoute#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.meshName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_name AppmeshGatewayRoute#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#name AppmeshGatewayRoute#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#spec AppmeshGatewayRoute#spec}

---

##### `virtualGatewayName`<sup>Required</sup> <a name="virtualGatewayName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.virtualGatewayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#id AppmeshGatewayRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshOwner`<sup>Optional</sup> <a name="meshOwner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.meshOwner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_owner AppmeshGatewayRoute#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags AppmeshGatewayRoute#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags_all AppmeshGatewayRoute#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetMeshOwner">resetMeshOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.putSpec"></a>

```java
public void putSpec(AppmeshGatewayRouteSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetId"></a>

```java
public void resetId()
```

##### `resetMeshOwner` <a name="resetMeshOwner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetMeshOwner"></a>

```java
public void resetMeshOwner()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRoute;

AppmeshGatewayRoute.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRoute;

AppmeshGatewayRoute.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRoute;

AppmeshGatewayRoute.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.resourceOwner">resourceOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference">AppmeshGatewayRouteSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshNameInput">meshNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshOwnerInput">meshOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.virtualGatewayNameInput">virtualGatewayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshName">meshName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshOwner">meshOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.virtualGatewayName">virtualGatewayName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.lastUpdatedDate"></a>

```java
public java.lang.String getLastUpdatedDate();
```

- *Type:* java.lang.String

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.resourceOwner"></a>

```java
public java.lang.String getResourceOwner();
```

- *Type:* java.lang.String

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.spec"></a>

```java
public AppmeshGatewayRouteSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference">AppmeshGatewayRouteSpecOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `meshNameInput`<sup>Optional</sup> <a name="meshNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshNameInput"></a>

```java
public java.lang.String getMeshNameInput();
```

- *Type:* java.lang.String

---

##### `meshOwnerInput`<sup>Optional</sup> <a name="meshOwnerInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshOwnerInput"></a>

```java
public java.lang.String getMeshOwnerInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.specInput"></a>

```java
public AppmeshGatewayRouteSpec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualGatewayNameInput`<sup>Optional</sup> <a name="virtualGatewayNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.virtualGatewayNameInput"></a>

```java
public java.lang.String getVirtualGatewayNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshName"></a>

```java
public java.lang.String getMeshName();
```

- *Type:* java.lang.String

---

##### `meshOwner`<sup>Required</sup> <a name="meshOwner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshOwner"></a>

```java
public java.lang.String getMeshOwner();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualGatewayName`<sup>Required</sup> <a name="virtualGatewayName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.virtualGatewayName"></a>

```java
public java.lang.String getVirtualGatewayName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshGatewayRouteConfig <a name="AppmeshGatewayRouteConfig" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteConfig;

AppmeshGatewayRouteConfig.builder()
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
    .spec(AppmeshGatewayRouteSpec)
    .virtualGatewayName(java.lang.String)
//  .id(java.lang.String)
//  .meshOwner(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.meshName">meshName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_name AppmeshGatewayRoute#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#name AppmeshGatewayRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.virtualGatewayName">virtualGatewayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#id AppmeshGatewayRoute#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.meshOwner">meshOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_owner AppmeshGatewayRoute#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags AppmeshGatewayRoute#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags_all AppmeshGatewayRoute#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.meshName"></a>

```java
public java.lang.String getMeshName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_name AppmeshGatewayRoute#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#name AppmeshGatewayRoute#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.spec"></a>

```java
public AppmeshGatewayRouteSpec getSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#spec AppmeshGatewayRoute#spec}

---

##### `virtualGatewayName`<sup>Required</sup> <a name="virtualGatewayName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.virtualGatewayName"></a>

```java
public java.lang.String getVirtualGatewayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#id AppmeshGatewayRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshOwner`<sup>Optional</sup> <a name="meshOwner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.meshOwner"></a>

```java
public java.lang.String getMeshOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_owner AppmeshGatewayRoute#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags AppmeshGatewayRoute#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags_all AppmeshGatewayRoute#tags_all}.

---

### AppmeshGatewayRouteSpec <a name="AppmeshGatewayRouteSpec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpec;

AppmeshGatewayRouteSpec.builder()
//  .grpcRoute(AppmeshGatewayRouteSpecGrpcRoute)
//  .http2Route(AppmeshGatewayRouteSpecHttp2Route)
//  .httpRoute(AppmeshGatewayRouteSpecHttpRoute)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.grpcRoute">grpcRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a></code> | grpc_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.http2Route">http2Route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a></code> | http2_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.httpRoute">httpRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a></code> | http_route block. |

---

##### `grpcRoute`<sup>Optional</sup> <a name="grpcRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.grpcRoute"></a>

```java
public AppmeshGatewayRouteSpecGrpcRoute getGrpcRoute();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a>

grpc_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#grpc_route AppmeshGatewayRoute#grpc_route}

---

##### `http2Route`<sup>Optional</sup> <a name="http2Route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.http2Route"></a>

```java
public AppmeshGatewayRouteSpecHttp2Route getHttp2Route();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a>

http2_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#http2_route AppmeshGatewayRoute#http2_route}

---

##### `httpRoute`<sup>Optional</sup> <a name="httpRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.httpRoute"></a>

```java
public AppmeshGatewayRouteSpecHttpRoute getHttpRoute();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a>

http_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#http_route AppmeshGatewayRoute#http_route}

---

### AppmeshGatewayRouteSpecGrpcRoute <a name="AppmeshGatewayRouteSpecGrpcRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecGrpcRoute;

AppmeshGatewayRouteSpecGrpcRoute.builder()
    .action(AppmeshGatewayRouteSpecGrpcRouteAction)
    .match(AppmeshGatewayRouteSpecGrpcRouteMatch)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a></code> | match block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.property.action"></a>

```java
public AppmeshGatewayRouteSpecGrpcRouteAction getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#action AppmeshGatewayRoute#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.property.match"></a>

```java
public AppmeshGatewayRouteSpecGrpcRouteMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

### AppmeshGatewayRouteSpecGrpcRouteAction <a name="AppmeshGatewayRouteSpecGrpcRouteAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecGrpcRouteAction;

AppmeshGatewayRouteSpecGrpcRouteAction.builder()
    .target(AppmeshGatewayRouteSpecGrpcRouteActionTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a></code> | target block. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction.property.target"></a>

```java
public AppmeshGatewayRouteSpecGrpcRouteActionTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#target AppmeshGatewayRoute#target}

---

### AppmeshGatewayRouteSpecGrpcRouteActionTarget <a name="AppmeshGatewayRouteSpecGrpcRouteActionTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecGrpcRouteActionTarget;

AppmeshGatewayRouteSpecGrpcRouteActionTarget.builder()
    .virtualService(AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget.property.virtualService">virtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a></code> | virtual_service block. |

---

##### `virtualService`<sup>Required</sup> <a name="virtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget.property.virtualService"></a>

```java
public AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService getVirtualService();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a>

virtual_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}

---

### AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService <a name="AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService;

AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService.builder()
    .virtualServiceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService.property.virtualServiceName">virtualServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}. |

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService.property.virtualServiceName"></a>

```java
public java.lang.String getVirtualServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.

---

### AppmeshGatewayRouteSpecGrpcRouteMatch <a name="AppmeshGatewayRouteSpecGrpcRouteMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecGrpcRouteMatch;

AppmeshGatewayRouteSpecGrpcRouteMatch.builder()
    .serviceName(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#service_name AppmeshGatewayRoute#service_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}. |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#service_name AppmeshGatewayRoute#service_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---

### AppmeshGatewayRouteSpecHttp2Route <a name="AppmeshGatewayRouteSpecHttp2Route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2Route;

AppmeshGatewayRouteSpecHttp2Route.builder()
    .action(AppmeshGatewayRouteSpecHttp2RouteAction)
    .match(AppmeshGatewayRouteSpecHttp2RouteMatch)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a></code> | match block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.property.action"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteAction getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#action AppmeshGatewayRoute#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.property.match"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

### AppmeshGatewayRouteSpecHttp2RouteAction <a name="AppmeshGatewayRouteSpecHttp2RouteAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2RouteAction;

AppmeshGatewayRouteSpecHttp2RouteAction.builder()
    .target(AppmeshGatewayRouteSpecHttp2RouteActionTarget)
//  .rewrite(AppmeshGatewayRouteSpecHttp2RouteActionRewrite)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.property.rewrite">rewrite</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a></code> | rewrite block. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.property.target"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#target AppmeshGatewayRoute#target}

---

##### `rewrite`<sup>Optional</sup> <a name="rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.property.rewrite"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionRewrite getRewrite();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a>

rewrite block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#rewrite AppmeshGatewayRoute#rewrite}

---

### AppmeshGatewayRouteSpecHttp2RouteActionRewrite <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2RouteActionRewrite;

AppmeshGatewayRouteSpecHttp2RouteActionRewrite.builder()
//  .hostname(AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname)
//  .prefix(AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a></code> | hostname block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.prefix">prefix</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a></code> | prefix block. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.hostname"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname getHostname();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.prefix"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix getPrefix();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a>

prefix block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}

---

### AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname;

AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname.builder()
    .defaultTargetHostname(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname.property.defaultTargetHostname">defaultTargetHostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}. |

---

##### `defaultTargetHostname`<sup>Required</sup> <a name="defaultTargetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname.property.defaultTargetHostname"></a>

```java
public java.lang.String getDefaultTargetHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}.

---

### AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix;

AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.builder()
//  .defaultPrefix(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.property.defaultPrefix">defaultPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#value AppmeshGatewayRoute#value}. |

---

##### `defaultPrefix`<sup>Optional</sup> <a name="defaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.property.defaultPrefix"></a>

```java
public java.lang.String getDefaultPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#value AppmeshGatewayRoute#value}.

---

### AppmeshGatewayRouteSpecHttp2RouteActionTarget <a name="AppmeshGatewayRouteSpecHttp2RouteActionTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2RouteActionTarget;

AppmeshGatewayRouteSpecHttp2RouteActionTarget.builder()
    .virtualService(AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget.property.virtualService">virtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a></code> | virtual_service block. |

---

##### `virtualService`<sup>Required</sup> <a name="virtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget.property.virtualService"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService getVirtualService();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a>

virtual_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}

---

### AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService <a name="AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService;

AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService.builder()
    .virtualServiceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService.property.virtualServiceName">virtualServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}. |

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService.property.virtualServiceName"></a>

```java
public java.lang.String getVirtualServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.

---

### AppmeshGatewayRouteSpecHttp2RouteMatch <a name="AppmeshGatewayRouteSpecHttp2RouteMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2RouteMatch;

AppmeshGatewayRouteSpecHttp2RouteMatch.builder()
//  .hostname(AppmeshGatewayRouteSpecHttp2RouteMatchHostname)
//  .port(java.lang.Number)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a></code> | hostname block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.hostname"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteMatchHostname getHostname();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}.

---

### AppmeshGatewayRouteSpecHttp2RouteMatchHostname <a name="AppmeshGatewayRouteSpecHttp2RouteMatchHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2RouteMatchHostname;

AppmeshGatewayRouteSpecHttp2RouteMatchHostname.builder()
//  .exact(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.property.exact">exact</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.property.suffix">suffix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}.

---

### AppmeshGatewayRouteSpecHttpRoute <a name="AppmeshGatewayRouteSpecHttpRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRoute;

AppmeshGatewayRouteSpecHttpRoute.builder()
    .action(AppmeshGatewayRouteSpecHttpRouteAction)
    .match(AppmeshGatewayRouteSpecHttpRouteMatch)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a></code> | match block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.property.action"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteAction getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#action AppmeshGatewayRoute#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.property.match"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

### AppmeshGatewayRouteSpecHttpRouteAction <a name="AppmeshGatewayRouteSpecHttpRouteAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRouteAction;

AppmeshGatewayRouteSpecHttpRouteAction.builder()
    .target(AppmeshGatewayRouteSpecHttpRouteActionTarget)
//  .rewrite(AppmeshGatewayRouteSpecHttpRouteActionRewrite)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.property.rewrite">rewrite</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a></code> | rewrite block. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.property.target"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#target AppmeshGatewayRoute#target}

---

##### `rewrite`<sup>Optional</sup> <a name="rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.property.rewrite"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionRewrite getRewrite();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a>

rewrite block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#rewrite AppmeshGatewayRoute#rewrite}

---

### AppmeshGatewayRouteSpecHttpRouteActionRewrite <a name="AppmeshGatewayRouteSpecHttpRouteActionRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRouteActionRewrite;

AppmeshGatewayRouteSpecHttpRouteActionRewrite.builder()
//  .hostname(AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname)
//  .prefix(AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a></code> | hostname block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.prefix">prefix</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a></code> | prefix block. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.hostname"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname getHostname();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.prefix"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix getPrefix();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a>

prefix block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}

---

### AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname <a name="AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname;

AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname.builder()
    .defaultTargetHostname(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname.property.defaultTargetHostname">defaultTargetHostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}. |

---

##### `defaultTargetHostname`<sup>Required</sup> <a name="defaultTargetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname.property.defaultTargetHostname"></a>

```java
public java.lang.String getDefaultTargetHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}.

---

### AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix <a name="AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix;

AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.builder()
//  .defaultPrefix(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.property.defaultPrefix">defaultPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#value AppmeshGatewayRoute#value}. |

---

##### `defaultPrefix`<sup>Optional</sup> <a name="defaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.property.defaultPrefix"></a>

```java
public java.lang.String getDefaultPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#value AppmeshGatewayRoute#value}.

---

### AppmeshGatewayRouteSpecHttpRouteActionTarget <a name="AppmeshGatewayRouteSpecHttpRouteActionTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRouteActionTarget;

AppmeshGatewayRouteSpecHttpRouteActionTarget.builder()
    .virtualService(AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget.property.virtualService">virtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a></code> | virtual_service block. |

---

##### `virtualService`<sup>Required</sup> <a name="virtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget.property.virtualService"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService getVirtualService();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a>

virtual_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}

---

### AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService <a name="AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService;

AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService.builder()
    .virtualServiceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService.property.virtualServiceName">virtualServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}. |

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService.property.virtualServiceName"></a>

```java
public java.lang.String getVirtualServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.

---

### AppmeshGatewayRouteSpecHttpRouteMatch <a name="AppmeshGatewayRouteSpecHttpRouteMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRouteMatch;

AppmeshGatewayRouteSpecHttpRouteMatch.builder()
//  .hostname(AppmeshGatewayRouteSpecHttpRouteMatchHostname)
//  .port(java.lang.Number)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a></code> | hostname block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.hostname"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteMatchHostname getHostname();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}.

---

### AppmeshGatewayRouteSpecHttpRouteMatchHostname <a name="AppmeshGatewayRouteSpecHttpRouteMatchHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRouteMatchHostname;

AppmeshGatewayRouteSpecHttpRouteMatchHostname.builder()
//  .exact(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.property.exact">exact</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.property.suffix">suffix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshGatewayRouteSpecGrpcRouteActionOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteActionOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference;

new AppmeshGatewayRouteSpecGrpcRouteActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.putTarget">putTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.putTarget"></a>

```java
public void putTarget(AppmeshGatewayRouteSpecGrpcRouteActionTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.target"></a>

```java
public AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.targetInput"></a>

```java
public AppmeshGatewayRouteSpecGrpcRouteActionTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecGrpcRouteAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a>

---


### AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference;

new AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.putVirtualService">putVirtualService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVirtualService` <a name="putVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.putVirtualService"></a>

```java
public void putVirtualService(AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.putVirtualService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualService">virtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualServiceInput">virtualServiceInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `virtualService`<sup>Required</sup> <a name="virtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualService"></a>

```java
public AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference getVirtualService();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference</a>

---

##### `virtualServiceInput`<sup>Optional</sup> <a name="virtualServiceInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualServiceInput"></a>

```java
public AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService getVirtualServiceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecGrpcRouteActionTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a>

---


### AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference;

new AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput">virtualServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName">virtualServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `virtualServiceNameInput`<sup>Optional</sup> <a name="virtualServiceNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput"></a>

```java
public java.lang.String getVirtualServiceNameInput();
```

- *Type:* java.lang.String

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName"></a>

```java
public java.lang.String getVirtualServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a>

---


### AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference;

new AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecGrpcRouteMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a>

---


### AppmeshGatewayRouteSpecGrpcRouteOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecGrpcRouteOutputReference;

new AppmeshGatewayRouteSpecGrpcRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putMatch">putMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putAction"></a>

```java
public void putAction(AppmeshGatewayRouteSpecGrpcRouteAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putMatch"></a>

```java
public void putMatch(AppmeshGatewayRouteSpecGrpcRouteMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference">AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.action"></a>

```java
public AppmeshGatewayRouteSpecGrpcRouteActionOutputReference getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.match"></a>

```java
public AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference">AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.actionInput"></a>

```java
public AppmeshGatewayRouteSpecGrpcRouteAction getActionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.matchInput"></a>

```java
public AppmeshGatewayRouteSpecGrpcRouteMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecGrpcRoute getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference;

new AppmeshGatewayRouteSpecHttp2RouteActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putRewrite">putRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resetRewrite">resetRewrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRewrite` <a name="putRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putRewrite"></a>

```java
public void putRewrite(AppmeshGatewayRouteSpecHttp2RouteActionRewrite value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putTarget"></a>

```java
public void putTarget(AppmeshGatewayRouteSpecHttp2RouteActionTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a>

---

##### `resetRewrite` <a name="resetRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resetRewrite"></a>

```java
public void resetRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewrite">rewrite</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewriteInput">rewriteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rewrite`<sup>Required</sup> <a name="rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewrite"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference getRewrite();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.target"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference</a>

---

##### `rewriteInput`<sup>Optional</sup> <a name="rewriteInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewriteInput"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionRewrite getRewriteInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.targetInput"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference;

new AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostnameInput">defaultTargetHostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostname">defaultTargetHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultTargetHostnameInput`<sup>Optional</sup> <a name="defaultTargetHostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostnameInput"></a>

```java
public java.lang.String getDefaultTargetHostnameInput();
```

- *Type:* java.lang.String

---

##### `defaultTargetHostname`<sup>Required</sup> <a name="defaultTargetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostname"></a>

```java
public java.lang.String getDefaultTargetHostname();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference;

new AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putHostname">putHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putPrefix">putPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostname` <a name="putHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putHostname"></a>

```java
public void putHostname(AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putHostname.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a>

---

##### `putPrefix` <a name="putPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putPrefix"></a>

```java
public void putPrefix(AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putPrefix.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a>

---

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefix">prefix</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostnameInput">hostnameInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefixInput">prefixInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostname"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference getHostname();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefix"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference getPrefix();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostnameInput"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname getHostnameInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefixInput"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix getPrefixInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionRewrite getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference;

new AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resetDefaultPrefix">resetDefaultPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultPrefix` <a name="resetDefaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resetDefaultPrefix"></a>

```java
public void resetDefaultPrefix()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefixInput">defaultPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefix">defaultPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultPrefixInput`<sup>Optional</sup> <a name="defaultPrefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefixInput"></a>

```java
public java.lang.String getDefaultPrefixInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `defaultPrefix`<sup>Required</sup> <a name="defaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefix"></a>

```java
public java.lang.String getDefaultPrefix();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference;

new AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.putVirtualService">putVirtualService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVirtualService` <a name="putVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.putVirtualService"></a>

```java
public void putVirtualService(AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.putVirtualService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualService">virtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualServiceInput">virtualServiceInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `virtualService`<sup>Required</sup> <a name="virtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualService"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference getVirtualService();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference</a>

---

##### `virtualServiceInput`<sup>Optional</sup> <a name="virtualServiceInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualServiceInput"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService getVirtualServiceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference;

new AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput">virtualServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceName">virtualServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `virtualServiceNameInput`<sup>Optional</sup> <a name="virtualServiceNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput"></a>

```java
public java.lang.String getVirtualServiceNameInput();
```

- *Type:* java.lang.String

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceName"></a>

```java
public java.lang.String getVirtualServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a>

---


### AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference;

new AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExact` <a name="resetExact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteMatchHostname getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a>

---


### AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference;

new AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putHostname">putHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostname` <a name="putHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putHostname"></a>

```java
public void putHostname(AppmeshGatewayRouteSpecHttp2RouteMatchHostname value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putHostname.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a>

---

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostnameInput">hostnameInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostname"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference getHostname();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostnameInput"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteMatchHostname getHostnameInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a>

---


### AppmeshGatewayRouteSpecHttp2RouteOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttp2RouteOutputReference;

new AppmeshGatewayRouteSpecHttp2RouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putMatch">putMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putAction"></a>

```java
public void putAction(AppmeshGatewayRouteSpecHttp2RouteAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putMatch"></a>

```java
public void putMatch(AppmeshGatewayRouteSpecHttp2RouteMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.action"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteActionOutputReference getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.match"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.actionInput"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteAction getActionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.matchInput"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttp2Route getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRouteActionOutputReference;

new AppmeshGatewayRouteSpecHttpRouteActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putRewrite">putRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resetRewrite">resetRewrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRewrite` <a name="putRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putRewrite"></a>

```java
public void putRewrite(AppmeshGatewayRouteSpecHttpRouteActionRewrite value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putTarget"></a>

```java
public void putTarget(AppmeshGatewayRouteSpecHttpRouteActionTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a>

---

##### `resetRewrite` <a name="resetRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resetRewrite"></a>

```java
public void resetRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewrite">rewrite</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference">AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewriteInput">rewriteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rewrite`<sup>Required</sup> <a name="rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewrite"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference getRewrite();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.target"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference">AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference</a>

---

##### `rewriteInput`<sup>Optional</sup> <a name="rewriteInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewriteInput"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionRewrite getRewriteInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.targetInput"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference;

new AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostnameInput">defaultTargetHostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostname">defaultTargetHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultTargetHostnameInput`<sup>Optional</sup> <a name="defaultTargetHostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostnameInput"></a>

```java
public java.lang.String getDefaultTargetHostnameInput();
```

- *Type:* java.lang.String

---

##### `defaultTargetHostname`<sup>Required</sup> <a name="defaultTargetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostname"></a>

```java
public java.lang.String getDefaultTargetHostname();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference;

new AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putHostname">putHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putPrefix">putPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostname` <a name="putHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putHostname"></a>

```java
public void putHostname(AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putHostname.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a>

---

##### `putPrefix` <a name="putPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putPrefix"></a>

```java
public void putPrefix(AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putPrefix.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a>

---

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefix">prefix</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostnameInput">hostnameInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefixInput">prefixInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostname"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference getHostname();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefix"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference getPrefix();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostnameInput"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname getHostnameInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefixInput"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix getPrefixInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionRewrite getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference;

new AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resetDefaultPrefix">resetDefaultPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultPrefix` <a name="resetDefaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resetDefaultPrefix"></a>

```java
public void resetDefaultPrefix()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefixInput">defaultPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefix">defaultPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultPrefixInput`<sup>Optional</sup> <a name="defaultPrefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefixInput"></a>

```java
public java.lang.String getDefaultPrefixInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `defaultPrefix`<sup>Required</sup> <a name="defaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefix"></a>

```java
public java.lang.String getDefaultPrefix();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference;

new AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.putVirtualService">putVirtualService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVirtualService` <a name="putVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.putVirtualService"></a>

```java
public void putVirtualService(AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.putVirtualService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualService">virtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualServiceInput">virtualServiceInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `virtualService`<sup>Required</sup> <a name="virtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualService"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference getVirtualService();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference</a>

---

##### `virtualServiceInput`<sup>Optional</sup> <a name="virtualServiceInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualServiceInput"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService getVirtualServiceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference;

new AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput">virtualServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName">virtualServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `virtualServiceNameInput`<sup>Optional</sup> <a name="virtualServiceNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput"></a>

```java
public java.lang.String getVirtualServiceNameInput();
```

- *Type:* java.lang.String

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName"></a>

```java
public java.lang.String getVirtualServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a>

---


### AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference;

new AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExact` <a name="resetExact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteMatchHostname getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a>

---


### AppmeshGatewayRouteSpecHttpRouteMatchOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteMatchOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference;

new AppmeshGatewayRouteSpecHttpRouteMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putHostname">putHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostname` <a name="putHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putHostname"></a>

```java
public void putHostname(AppmeshGatewayRouteSpecHttpRouteMatchHostname value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putHostname.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a>

---

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostnameInput">hostnameInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostname"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference getHostname();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostnameInput"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteMatchHostname getHostnameInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a>

---


### AppmeshGatewayRouteSpecHttpRouteOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecHttpRouteOutputReference;

new AppmeshGatewayRouteSpecHttpRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putMatch">putMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putAction"></a>

```java
public void putAction(AppmeshGatewayRouteSpecHttpRouteAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putMatch"></a>

```java
public void putMatch(AppmeshGatewayRouteSpecHttpRouteMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference">AppmeshGatewayRouteSpecHttpRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.action"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteActionOutputReference getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference">AppmeshGatewayRouteSpecHttpRouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.match"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.actionInput"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteAction getActionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.matchInput"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpecHttpRoute getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a>

---


### AppmeshGatewayRouteSpecOutputReference <a name="AppmeshGatewayRouteSpecOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appmesh_gateway_route.AppmeshGatewayRouteSpecOutputReference;

new AppmeshGatewayRouteSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putGrpcRoute">putGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttp2Route">putHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttpRoute">putHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetGrpcRoute">resetGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetHttp2Route">resetHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetHttpRoute">resetHttpRoute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrpcRoute` <a name="putGrpcRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putGrpcRoute"></a>

```java
public void putGrpcRoute(AppmeshGatewayRouteSpecGrpcRoute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putGrpcRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a>

---

##### `putHttp2Route` <a name="putHttp2Route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttp2Route"></a>

```java
public void putHttp2Route(AppmeshGatewayRouteSpecHttp2Route value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttp2Route.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a>

---

##### `putHttpRoute` <a name="putHttpRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttpRoute"></a>

```java
public void putHttpRoute(AppmeshGatewayRouteSpecHttpRoute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttpRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a>

---

##### `resetGrpcRoute` <a name="resetGrpcRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetGrpcRoute"></a>

```java
public void resetGrpcRoute()
```

##### `resetHttp2Route` <a name="resetHttp2Route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetHttp2Route"></a>

```java
public void resetHttp2Route()
```

##### `resetHttpRoute` <a name="resetHttpRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetHttpRoute"></a>

```java
public void resetHttpRoute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.grpcRoute">grpcRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference">AppmeshGatewayRouteSpecGrpcRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.http2Route">http2Route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference">AppmeshGatewayRouteSpecHttp2RouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.httpRoute">httpRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference">AppmeshGatewayRouteSpecHttpRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.grpcRouteInput">grpcRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.http2RouteInput">http2RouteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.httpRouteInput">httpRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grpcRoute`<sup>Required</sup> <a name="grpcRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.grpcRoute"></a>

```java
public AppmeshGatewayRouteSpecGrpcRouteOutputReference getGrpcRoute();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference">AppmeshGatewayRouteSpecGrpcRouteOutputReference</a>

---

##### `http2Route`<sup>Required</sup> <a name="http2Route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.http2Route"></a>

```java
public AppmeshGatewayRouteSpecHttp2RouteOutputReference getHttp2Route();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference">AppmeshGatewayRouteSpecHttp2RouteOutputReference</a>

---

##### `httpRoute`<sup>Required</sup> <a name="httpRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.httpRoute"></a>

```java
public AppmeshGatewayRouteSpecHttpRouteOutputReference getHttpRoute();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference">AppmeshGatewayRouteSpecHttpRouteOutputReference</a>

---

##### `grpcRouteInput`<sup>Optional</sup> <a name="grpcRouteInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.grpcRouteInput"></a>

```java
public AppmeshGatewayRouteSpecGrpcRoute getGrpcRouteInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a>

---

##### `http2RouteInput`<sup>Optional</sup> <a name="http2RouteInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.http2RouteInput"></a>

```java
public AppmeshGatewayRouteSpecHttp2Route getHttp2RouteInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a>

---

##### `httpRouteInput`<sup>Optional</sup> <a name="httpRouteInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.httpRouteInput"></a>

```java
public AppmeshGatewayRouteSpecHttpRoute getHttpRouteInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.internalValue"></a>

```java
public AppmeshGatewayRouteSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a>

---



