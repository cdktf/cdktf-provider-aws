# `route53DomainsDelegationSignerRecord` Submodule <a name="`route53DomainsDelegationSignerRecord` Submodule" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53DomainsDelegationSignerRecord <a name="Route53DomainsDelegationSignerRecord" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record aws_route53domains_delegation_signer_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_delegation_signer_record.Route53DomainsDelegationSignerRecord;

Route53DomainsDelegationSignerRecord.Builder.create(Construct scope, java.lang.String id)
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
    .domainName(java.lang.String)
//  .signingAttributes(IResolvable)
//  .signingAttributes(java.util.List<Route53DomainsDelegationSignerRecordSigningAttributes>)
//  .timeouts(Route53DomainsDelegationSignerRecordTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record#domain_name Route53DomainsDelegationSignerRecord#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.signingAttributes">signingAttributes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>></code> | signing_attributes block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record#domain_name Route53DomainsDelegationSignerRecord#domain_name}.

---

##### `signingAttributes`<sup>Optional</sup> <a name="signingAttributes" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.signingAttributes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>>

signing_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record#signing_attributes Route53DomainsDelegationSignerRecord#signing_attributes}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record#timeouts Route53DomainsDelegationSignerRecord#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putSigningAttributes">putSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetSigningAttributes">resetSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSigningAttributes` <a name="putSigningAttributes" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putSigningAttributes"></a>

```java
public void putSigningAttributes(IResolvable OR java.util.List<Route53DomainsDelegationSignerRecordSigningAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putSigningAttributes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putTimeouts"></a>

```java
public void putTimeouts(Route53DomainsDelegationSignerRecordTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a>

---

##### `resetSigningAttributes` <a name="resetSigningAttributes" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetSigningAttributes"></a>

```java
public void resetSigningAttributes()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Route53DomainsDelegationSignerRecord resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_delegation_signer_record.Route53DomainsDelegationSignerRecord;

Route53DomainsDelegationSignerRecord.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_delegation_signer_record.Route53DomainsDelegationSignerRecord;

Route53DomainsDelegationSignerRecord.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_delegation_signer_record.Route53DomainsDelegationSignerRecord;

Route53DomainsDelegationSignerRecord.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_delegation_signer_record.Route53DomainsDelegationSignerRecord;

Route53DomainsDelegationSignerRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53DomainsDelegationSignerRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Route53DomainsDelegationSignerRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53DomainsDelegationSignerRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53DomainsDelegationSignerRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Route53DomainsDelegationSignerRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.dnssecKeyId">dnssecKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.signingAttributes">signingAttributes</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList">Route53DomainsDelegationSignerRecordSigningAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference">Route53DomainsDelegationSignerRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.signingAttributesInput">signingAttributesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dnssecKeyId`<sup>Required</sup> <a name="dnssecKeyId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.dnssecKeyId"></a>

```java
public java.lang.String getDnssecKeyId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `signingAttributes`<sup>Required</sup> <a name="signingAttributes" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.signingAttributes"></a>

```java
public Route53DomainsDelegationSignerRecordSigningAttributesList getSigningAttributes();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList">Route53DomainsDelegationSignerRecordSigningAttributesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.timeouts"></a>

```java
public Route53DomainsDelegationSignerRecordTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference">Route53DomainsDelegationSignerRecordTimeoutsOutputReference</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `signingAttributesInput`<sup>Optional</sup> <a name="signingAttributesInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.signingAttributesInput"></a>

```java
public java.lang.Object getSigningAttributesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53DomainsDelegationSignerRecordConfig <a name="Route53DomainsDelegationSignerRecordConfig" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_delegation_signer_record.Route53DomainsDelegationSignerRecordConfig;

Route53DomainsDelegationSignerRecordConfig.builder()
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
    .domainName(java.lang.String)
//  .signingAttributes(IResolvable)
//  .signingAttributes(java.util.List<Route53DomainsDelegationSignerRecordSigningAttributes>)
//  .timeouts(Route53DomainsDelegationSignerRecordTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record#domain_name Route53DomainsDelegationSignerRecord#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.signingAttributes">signingAttributes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>></code> | signing_attributes block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record#domain_name Route53DomainsDelegationSignerRecord#domain_name}.

---

##### `signingAttributes`<sup>Optional</sup> <a name="signingAttributes" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.signingAttributes"></a>

```java
public java.lang.Object getSigningAttributes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>>

signing_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record#signing_attributes Route53DomainsDelegationSignerRecord#signing_attributes}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.timeouts"></a>

```java
public Route53DomainsDelegationSignerRecordTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record#timeouts Route53DomainsDelegationSignerRecord#timeouts}

---

### Route53DomainsDelegationSignerRecordSigningAttributes <a name="Route53DomainsDelegationSignerRecordSigningAttributes" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_delegation_signer_record.Route53DomainsDelegationSignerRecordSigningAttributes;

Route53DomainsDelegationSignerRecordSigningAttributes.builder()
    .algorithm(java.lang.Number)
    .flags(java.lang.Number)
    .publicKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.algorithm">algorithm</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record#algorithm Route53DomainsDelegationSignerRecord#algorithm}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.flags">flags</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record#flags Route53DomainsDelegationSignerRecord#flags}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record#public_key Route53DomainsDelegationSignerRecord#public_key}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.algorithm"></a>

```java
public java.lang.Number getAlgorithm();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record#algorithm Route53DomainsDelegationSignerRecord#algorithm}.

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.flags"></a>

```java
public java.lang.Number getFlags();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record#flags Route53DomainsDelegationSignerRecord#flags}.

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record#public_key Route53DomainsDelegationSignerRecord#public_key}.

---

### Route53DomainsDelegationSignerRecordTimeouts <a name="Route53DomainsDelegationSignerRecordTimeouts" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_delegation_signer_record.Route53DomainsDelegationSignerRecordTimeouts;

Route53DomainsDelegationSignerRecordTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record#create Route53DomainsDelegationSignerRecord#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/route53domains_delegation_signer_record#delete Route53DomainsDelegationSignerRecord#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53DomainsDelegationSignerRecordSigningAttributesList <a name="Route53DomainsDelegationSignerRecordSigningAttributesList" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_delegation_signer_record.Route53DomainsDelegationSignerRecordSigningAttributesList;

new Route53DomainsDelegationSignerRecordSigningAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.get"></a>

```java
public Route53DomainsDelegationSignerRecordSigningAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>>

---


### Route53DomainsDelegationSignerRecordSigningAttributesOutputReference <a name="Route53DomainsDelegationSignerRecordSigningAttributesOutputReference" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_delegation_signer_record.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference;

new Route53DomainsDelegationSignerRecordSigningAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.flagsInput">flagsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.flags">flags</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.algorithmInput"></a>

```java
public java.lang.Number getAlgorithmInput();
```

- *Type:* java.lang.Number

---

##### `flagsInput`<sup>Optional</sup> <a name="flagsInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.flagsInput"></a>

```java
public java.lang.Number getFlagsInput();
```

- *Type:* java.lang.Number

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.publicKeyInput"></a>

```java
public java.lang.String getPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.algorithm"></a>

```java
public java.lang.Number getAlgorithm();
```

- *Type:* java.lang.Number

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.flags"></a>

```java
public java.lang.Number getFlags();
```

- *Type:* java.lang.Number

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>

---


### Route53DomainsDelegationSignerRecordTimeoutsOutputReference <a name="Route53DomainsDelegationSignerRecordTimeoutsOutputReference" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_delegation_signer_record.Route53DomainsDelegationSignerRecordTimeoutsOutputReference;

new Route53DomainsDelegationSignerRecordTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a>

---



