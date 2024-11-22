# `route53ProfilesResourceAssociation` Submodule <a name="`route53ProfilesResourceAssociation` Submodule" id="@cdktf/provider-aws.route53ProfilesResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ProfilesResourceAssociation <a name="Route53ProfilesResourceAssociation" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association aws_route53profiles_resource_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_profiles_resource_association.Route53ProfilesResourceAssociation;

Route53ProfilesResourceAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .profileId(java.lang.String)
    .resourceArn(java.lang.String)
//  .resourceProperties(java.lang.String)
//  .timeouts(Route53ProfilesResourceAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#name Route53ProfilesResourceAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.profileId">profileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#profile_id Route53ProfilesResourceAssociation#profile_id}. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#resource_arn Route53ProfilesResourceAssociation#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.resourceProperties">resourceProperties</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#resource_properties Route53ProfilesResourceAssociation#resource_properties}. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts">Route53ProfilesResourceAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#name Route53ProfilesResourceAssociation#name}.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.profileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#profile_id Route53ProfilesResourceAssociation#profile_id}.

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.resourceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#resource_arn Route53ProfilesResourceAssociation#resource_arn}.

---

##### `resourceProperties`<sup>Optional</sup> <a name="resourceProperties" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.resourceProperties"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#resource_properties Route53ProfilesResourceAssociation#resource_properties}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts">Route53ProfilesResourceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#timeouts Route53ProfilesResourceAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.resetResourceProperties">resetResourceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.putTimeouts"></a>

```java
public void putTimeouts(Route53ProfilesResourceAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts">Route53ProfilesResourceAssociationTimeouts</a>

---

##### `resetResourceProperties` <a name="resetResourceProperties" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.resetResourceProperties"></a>

```java
public void resetResourceProperties()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Route53ProfilesResourceAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_profiles_resource_association.Route53ProfilesResourceAssociation;

Route53ProfilesResourceAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_profiles_resource_association.Route53ProfilesResourceAssociation;

Route53ProfilesResourceAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_profiles_resource_association.Route53ProfilesResourceAssociation;

Route53ProfilesResourceAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_profiles_resource_association.Route53ProfilesResourceAssociation;

Route53ProfilesResourceAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53ProfilesResourceAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Route53ProfilesResourceAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53ProfilesResourceAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53ProfilesResourceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Route53ProfilesResourceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference">Route53ProfilesResourceAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.profileIdInput">profileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourceArnInput">resourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourcePropertiesInput">resourcePropertiesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts">Route53ProfilesResourceAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourceProperties">resourceProperties</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.timeouts"></a>

```java
public Route53ProfilesResourceAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference">Route53ProfilesResourceAssociationTimeoutsOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.profileIdInput"></a>

```java
public java.lang.String getProfileIdInput();
```

- *Type:* java.lang.String

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourceArnInput"></a>

```java
public java.lang.String getResourceArnInput();
```

- *Type:* java.lang.String

---

##### `resourcePropertiesInput`<sup>Optional</sup> <a name="resourcePropertiesInput" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourcePropertiesInput"></a>

```java
public java.lang.String getResourcePropertiesInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts">Route53ProfilesResourceAssociationTimeouts</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `resourceProperties`<sup>Required</sup> <a name="resourceProperties" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourceProperties"></a>

```java
public java.lang.String getResourceProperties();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ProfilesResourceAssociationConfig <a name="Route53ProfilesResourceAssociationConfig" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_profiles_resource_association.Route53ProfilesResourceAssociationConfig;

Route53ProfilesResourceAssociationConfig.builder()
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
    .name(java.lang.String)
    .profileId(java.lang.String)
    .resourceArn(java.lang.String)
//  .resourceProperties(java.lang.String)
//  .timeouts(Route53ProfilesResourceAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#name Route53ProfilesResourceAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.profileId">profileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#profile_id Route53ProfilesResourceAssociation#profile_id}. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#resource_arn Route53ProfilesResourceAssociation#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.resourceProperties">resourceProperties</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#resource_properties Route53ProfilesResourceAssociation#resource_properties}. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts">Route53ProfilesResourceAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#name Route53ProfilesResourceAssociation#name}.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#profile_id Route53ProfilesResourceAssociation#profile_id}.

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#resource_arn Route53ProfilesResourceAssociation#resource_arn}.

---

##### `resourceProperties`<sup>Optional</sup> <a name="resourceProperties" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.resourceProperties"></a>

```java
public java.lang.String getResourceProperties();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#resource_properties Route53ProfilesResourceAssociation#resource_properties}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.timeouts"></a>

```java
public Route53ProfilesResourceAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts">Route53ProfilesResourceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#timeouts Route53ProfilesResourceAssociation#timeouts}

---

### Route53ProfilesResourceAssociationTimeouts <a name="Route53ProfilesResourceAssociationTimeouts" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_profiles_resource_association.Route53ProfilesResourceAssociationTimeouts;

Route53ProfilesResourceAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#create Route53ProfilesResourceAssociation#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#delete Route53ProfilesResourceAssociation#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/route53profiles_resource_association#read Route53ProfilesResourceAssociation#read}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ProfilesResourceAssociationTimeoutsOutputReference <a name="Route53ProfilesResourceAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_profiles_resource_association.Route53ProfilesResourceAssociationTimeoutsOutputReference;

new Route53ProfilesResourceAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts">Route53ProfilesResourceAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts">Route53ProfilesResourceAssociationTimeouts</a>

---



