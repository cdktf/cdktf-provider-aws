# `route53HostedZoneDnssec` Submodule <a name="`route53HostedZoneDnssec` Submodule" id="@cdktf/provider-aws.route53HostedZoneDnssec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HostedZoneDnssec <a name="Route53HostedZoneDnssec" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec aws_route53_hosted_zone_dnssec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_hosted_zone_dnssec.Route53HostedZoneDnssec;

Route53HostedZoneDnssec.Builder.create(Construct scope, java.lang.String id)
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
    .hostedZoneId(java.lang.String)
//  .id(java.lang.String)
//  .signingStatus(java.lang.String)
//  .timeouts(Route53HostedZoneDnssecTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#hosted_zone_id Route53HostedZoneDnssec#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#id Route53HostedZoneDnssec#id}. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.signingStatus">signingStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#signing_status Route53HostedZoneDnssec#signing_status}. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts">Route53HostedZoneDnssecTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.hostedZoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#hosted_zone_id Route53HostedZoneDnssec#hosted_zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#id Route53HostedZoneDnssec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `signingStatus`<sup>Optional</sup> <a name="signingStatus" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.signingStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#signing_status Route53HostedZoneDnssec#signing_status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts">Route53HostedZoneDnssecTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#timeouts Route53HostedZoneDnssec#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetSigningStatus">resetSigningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.putTimeouts"></a>

```java
public void putTimeouts(Route53HostedZoneDnssecTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts">Route53HostedZoneDnssecTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetId"></a>

```java
public void resetId()
```

##### `resetSigningStatus` <a name="resetSigningStatus" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetSigningStatus"></a>

```java
public void resetSigningStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Route53HostedZoneDnssec resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_hosted_zone_dnssec.Route53HostedZoneDnssec;

Route53HostedZoneDnssec.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_hosted_zone_dnssec.Route53HostedZoneDnssec;

Route53HostedZoneDnssec.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_hosted_zone_dnssec.Route53HostedZoneDnssec;

Route53HostedZoneDnssec.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_hosted_zone_dnssec.Route53HostedZoneDnssec;

Route53HostedZoneDnssec.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53HostedZoneDnssec.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Route53HostedZoneDnssec resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53HostedZoneDnssec to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53HostedZoneDnssec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Route53HostedZoneDnssec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference">Route53HostedZoneDnssecTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.signingStatusInput">signingStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts">Route53HostedZoneDnssecTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.signingStatus">signingStatus</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.timeouts"></a>

```java
public Route53HostedZoneDnssecTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference">Route53HostedZoneDnssecTimeoutsOutputReference</a>

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.hostedZoneIdInput"></a>

```java
public java.lang.String getHostedZoneIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `signingStatusInput`<sup>Optional</sup> <a name="signingStatusInput" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.signingStatusInput"></a>

```java
public java.lang.String getSigningStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts">Route53HostedZoneDnssecTimeouts</a>

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `signingStatus`<sup>Required</sup> <a name="signingStatus" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.signingStatus"></a>

```java
public java.lang.String getSigningStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HostedZoneDnssecConfig <a name="Route53HostedZoneDnssecConfig" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_hosted_zone_dnssec.Route53HostedZoneDnssecConfig;

Route53HostedZoneDnssecConfig.builder()
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
    .hostedZoneId(java.lang.String)
//  .id(java.lang.String)
//  .signingStatus(java.lang.String)
//  .timeouts(Route53HostedZoneDnssecTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#hosted_zone_id Route53HostedZoneDnssec#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#id Route53HostedZoneDnssec#id}. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.signingStatus">signingStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#signing_status Route53HostedZoneDnssec#signing_status}. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts">Route53HostedZoneDnssecTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#hosted_zone_id Route53HostedZoneDnssec#hosted_zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#id Route53HostedZoneDnssec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `signingStatus`<sup>Optional</sup> <a name="signingStatus" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.signingStatus"></a>

```java
public java.lang.String getSigningStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#signing_status Route53HostedZoneDnssec#signing_status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.timeouts"></a>

```java
public Route53HostedZoneDnssecTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts">Route53HostedZoneDnssecTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#timeouts Route53HostedZoneDnssec#timeouts}

---

### Route53HostedZoneDnssecTimeouts <a name="Route53HostedZoneDnssecTimeouts" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_hosted_zone_dnssec.Route53HostedZoneDnssecTimeouts;

Route53HostedZoneDnssecTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#create Route53HostedZoneDnssec#create}. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#delete Route53HostedZoneDnssec#delete}. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#update Route53HostedZoneDnssec#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#create Route53HostedZoneDnssec#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#delete Route53HostedZoneDnssec#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53_hosted_zone_dnssec#update Route53HostedZoneDnssec#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53HostedZoneDnssecTimeoutsOutputReference <a name="Route53HostedZoneDnssecTimeoutsOutputReference" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_hosted_zone_dnssec.Route53HostedZoneDnssecTimeoutsOutputReference;

new Route53HostedZoneDnssecTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts">Route53HostedZoneDnssecTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts">Route53HostedZoneDnssecTimeouts</a>

---



