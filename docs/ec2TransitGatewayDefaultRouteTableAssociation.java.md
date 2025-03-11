# `ec2TransitGatewayDefaultRouteTableAssociation` Submodule <a name="`ec2TransitGatewayDefaultRouteTableAssociation` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayDefaultRouteTableAssociation <a name="Ec2TransitGatewayDefaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_transit_gateway_default_route_table_association aws_ec2_transit_gateway_default_route_table_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_default_route_table_association.Ec2TransitGatewayDefaultRouteTableAssociation;

Ec2TransitGatewayDefaultRouteTableAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .transitGatewayId(java.lang.String)
    .transitGatewayRouteTableId(java.lang.String)
//  .timeouts(Ec2TransitGatewayDefaultRouteTableAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_transit_gateway_default_route_table_association#transit_gateway_id Ec2TransitGatewayDefaultRouteTableAssociation#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_transit_gateway_default_route_table_association#transit_gateway_route_table_id Ec2TransitGatewayDefaultRouteTableAssociation#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts">Ec2TransitGatewayDefaultRouteTableAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.transitGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_transit_gateway_default_route_table_association#transit_gateway_id Ec2TransitGatewayDefaultRouteTableAssociation#transit_gateway_id}.

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.transitGatewayRouteTableId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_transit_gateway_default_route_table_association#transit_gateway_route_table_id Ec2TransitGatewayDefaultRouteTableAssociation#transit_gateway_route_table_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts">Ec2TransitGatewayDefaultRouteTableAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_transit_gateway_default_route_table_association#timeouts Ec2TransitGatewayDefaultRouteTableAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.putTimeouts"></a>

```java
public void putTimeouts(Ec2TransitGatewayDefaultRouteTableAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts">Ec2TransitGatewayDefaultRouteTableAssociationTimeouts</a>

---

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2TransitGatewayDefaultRouteTableAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_default_route_table_association.Ec2TransitGatewayDefaultRouteTableAssociation;

Ec2TransitGatewayDefaultRouteTableAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_default_route_table_association.Ec2TransitGatewayDefaultRouteTableAssociation;

Ec2TransitGatewayDefaultRouteTableAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_default_route_table_association.Ec2TransitGatewayDefaultRouteTableAssociation;

Ec2TransitGatewayDefaultRouteTableAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_default_route_table_association.Ec2TransitGatewayDefaultRouteTableAssociation;

Ec2TransitGatewayDefaultRouteTableAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2TransitGatewayDefaultRouteTableAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Ec2TransitGatewayDefaultRouteTableAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2TransitGatewayDefaultRouteTableAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2TransitGatewayDefaultRouteTableAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_transit_gateway_default_route_table_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayDefaultRouteTableAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.originalDefaultRouteTableId">originalDefaultRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference">Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts">Ec2TransitGatewayDefaultRouteTableAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.transitGatewayRouteTableIdInput">transitGatewayRouteTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `originalDefaultRouteTableId`<sup>Required</sup> <a name="originalDefaultRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.originalDefaultRouteTableId"></a>

```java
public java.lang.String getOriginalDefaultRouteTableId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.timeouts"></a>

```java
public Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference">Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts">Ec2TransitGatewayDefaultRouteTableAssociationTimeouts</a>

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.transitGatewayIdInput"></a>

```java
public java.lang.String getTransitGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `transitGatewayRouteTableIdInput`<sup>Optional</sup> <a name="transitGatewayRouteTableIdInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.transitGatewayRouteTableIdInput"></a>

```java
public java.lang.String getTransitGatewayRouteTableIdInput();
```

- *Type:* java.lang.String

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.transitGatewayRouteTableId"></a>

```java
public java.lang.String getTransitGatewayRouteTableId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayDefaultRouteTableAssociationConfig <a name="Ec2TransitGatewayDefaultRouteTableAssociationConfig" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_default_route_table_association.Ec2TransitGatewayDefaultRouteTableAssociationConfig;

Ec2TransitGatewayDefaultRouteTableAssociationConfig.builder()
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
    .transitGatewayId(java.lang.String)
    .transitGatewayRouteTableId(java.lang.String)
//  .timeouts(Ec2TransitGatewayDefaultRouteTableAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_transit_gateway_default_route_table_association#transit_gateway_id Ec2TransitGatewayDefaultRouteTableAssociation#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_transit_gateway_default_route_table_association#transit_gateway_route_table_id Ec2TransitGatewayDefaultRouteTableAssociation#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts">Ec2TransitGatewayDefaultRouteTableAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_transit_gateway_default_route_table_association#transit_gateway_id Ec2TransitGatewayDefaultRouteTableAssociation#transit_gateway_id}.

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.transitGatewayRouteTableId"></a>

```java
public java.lang.String getTransitGatewayRouteTableId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_transit_gateway_default_route_table_association#transit_gateway_route_table_id Ec2TransitGatewayDefaultRouteTableAssociation#transit_gateway_route_table_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.timeouts"></a>

```java
public Ec2TransitGatewayDefaultRouteTableAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts">Ec2TransitGatewayDefaultRouteTableAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_transit_gateway_default_route_table_association#timeouts Ec2TransitGatewayDefaultRouteTableAssociation#timeouts}

---

### Ec2TransitGatewayDefaultRouteTableAssociationTimeouts <a name="Ec2TransitGatewayDefaultRouteTableAssociationTimeouts" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_default_route_table_association.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts;

Ec2TransitGatewayDefaultRouteTableAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_transit_gateway_default_route_table_association#create Ec2TransitGatewayDefaultRouteTableAssociation#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_transit_gateway_default_route_table_association#delete Ec2TransitGatewayDefaultRouteTableAssociation#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_transit_gateway_default_route_table_association#update Ec2TransitGatewayDefaultRouteTableAssociation#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference <a name="Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_default_route_table_association.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference;

new Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts">Ec2TransitGatewayDefaultRouteTableAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts">Ec2TransitGatewayDefaultRouteTableAssociationTimeouts</a>

---



