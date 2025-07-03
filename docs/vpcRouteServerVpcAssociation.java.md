# `vpcRouteServerVpcAssociation` Submodule <a name="`vpcRouteServerVpcAssociation` Submodule" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcRouteServerVpcAssociation <a name="VpcRouteServerVpcAssociation" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpc_route_server_vpc_association aws_vpc_route_server_vpc_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_route_server_vpc_association.VpcRouteServerVpcAssociation;

VpcRouteServerVpcAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .routeServerId(java.lang.String)
    .vpcId(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(VpcRouteServerVpcAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.routeServerId">routeServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpc_route_server_vpc_association#route_server_id VpcRouteServerVpcAssociation#route_server_id}. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpc_route_server_vpc_association#vpc_id VpcRouteServerVpcAssociation#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts">VpcRouteServerVpcAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `routeServerId`<sup>Required</sup> <a name="routeServerId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.routeServerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpc_route_server_vpc_association#route_server_id VpcRouteServerVpcAssociation#route_server_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpc_route_server_vpc_association#vpc_id VpcRouteServerVpcAssociation#vpc_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpc_route_server_vpc_association#region VpcRouteServerVpcAssociation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts">VpcRouteServerVpcAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpc_route_server_vpc_association#timeouts VpcRouteServerVpcAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.putTimeouts"></a>

```java
public void putTimeouts(VpcRouteServerVpcAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts">VpcRouteServerVpcAssociationTimeouts</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcRouteServerVpcAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_route_server_vpc_association.VpcRouteServerVpcAssociation;

VpcRouteServerVpcAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_route_server_vpc_association.VpcRouteServerVpcAssociation;

VpcRouteServerVpcAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_route_server_vpc_association.VpcRouteServerVpcAssociation;

VpcRouteServerVpcAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_route_server_vpc_association.VpcRouteServerVpcAssociation;

VpcRouteServerVpcAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpcRouteServerVpcAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VpcRouteServerVpcAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpcRouteServerVpcAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpcRouteServerVpcAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpc_route_server_vpc_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VpcRouteServerVpcAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference">VpcRouteServerVpcAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.routeServerIdInput">routeServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts">VpcRouteServerVpcAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.routeServerId">routeServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.timeouts"></a>

```java
public VpcRouteServerVpcAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference">VpcRouteServerVpcAssociationTimeoutsOutputReference</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `routeServerIdInput`<sup>Optional</sup> <a name="routeServerIdInput" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.routeServerIdInput"></a>

```java
public java.lang.String getRouteServerIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts">VpcRouteServerVpcAssociationTimeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `routeServerId`<sup>Required</sup> <a name="routeServerId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.routeServerId"></a>

```java
public java.lang.String getRouteServerId();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpcRouteServerVpcAssociationConfig <a name="VpcRouteServerVpcAssociationConfig" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_route_server_vpc_association.VpcRouteServerVpcAssociationConfig;

VpcRouteServerVpcAssociationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .routeServerId(java.lang.String)
    .vpcId(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(VpcRouteServerVpcAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.routeServerId">routeServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpc_route_server_vpc_association#route_server_id VpcRouteServerVpcAssociation#route_server_id}. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpc_route_server_vpc_association#vpc_id VpcRouteServerVpcAssociation#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts">VpcRouteServerVpcAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `routeServerId`<sup>Required</sup> <a name="routeServerId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.routeServerId"></a>

```java
public java.lang.String getRouteServerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpc_route_server_vpc_association#route_server_id VpcRouteServerVpcAssociation#route_server_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpc_route_server_vpc_association#vpc_id VpcRouteServerVpcAssociation#vpc_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpc_route_server_vpc_association#region VpcRouteServerVpcAssociation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.timeouts"></a>

```java
public VpcRouteServerVpcAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts">VpcRouteServerVpcAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpc_route_server_vpc_association#timeouts VpcRouteServerVpcAssociation#timeouts}

---

### VpcRouteServerVpcAssociationTimeouts <a name="VpcRouteServerVpcAssociationTimeouts" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_route_server_vpc_association.VpcRouteServerVpcAssociationTimeouts;

VpcRouteServerVpcAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpc_route_server_vpc_association#create VpcRouteServerVpcAssociation#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpc_route_server_vpc_association#delete VpcRouteServerVpcAssociation#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcRouteServerVpcAssociationTimeoutsOutputReference <a name="VpcRouteServerVpcAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_route_server_vpc_association.VpcRouteServerVpcAssociationTimeoutsOutputReference;

new VpcRouteServerVpcAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts">VpcRouteServerVpcAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts">VpcRouteServerVpcAssociationTimeouts</a>

---



