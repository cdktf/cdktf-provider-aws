# `directoryServiceTrust` Submodule <a name="`directoryServiceTrust` Submodule" id="@cdktf/provider-aws.directoryServiceTrust"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceTrust <a name="DirectoryServiceTrust" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust aws_directory_service_trust}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_trust.DirectoryServiceTrust;

DirectoryServiceTrust.Builder.create(Construct scope, java.lang.String id)
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
    .directoryId(java.lang.String)
    .remoteDomainName(java.lang.String)
    .trustDirection(java.lang.String)
    .trustPassword(java.lang.String)
//  .conditionalForwarderIpAddrs(java.util.List<java.lang.String>)
//  .deleteAssociatedConditionalForwarder(java.lang.Boolean)
//  .deleteAssociatedConditionalForwarder(IResolvable)
//  .selectiveAuth(java.lang.String)
//  .trustType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#directory_id DirectoryServiceTrust#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.remoteDomainName">remoteDomainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#remote_domain_name DirectoryServiceTrust#remote_domain_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.trustDirection">trustDirection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#trust_direction DirectoryServiceTrust#trust_direction}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.trustPassword">trustPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#trust_password DirectoryServiceTrust#trust_password}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.conditionalForwarderIpAddrs">conditionalForwarderIpAddrs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#conditional_forwarder_ip_addrs DirectoryServiceTrust#conditional_forwarder_ip_addrs}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.deleteAssociatedConditionalForwarder">deleteAssociatedConditionalForwarder</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#delete_associated_conditional_forwarder DirectoryServiceTrust#delete_associated_conditional_forwarder}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.selectiveAuth">selectiveAuth</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#selective_auth DirectoryServiceTrust#selective_auth}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.trustType">trustType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#trust_type DirectoryServiceTrust#trust_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.directoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#directory_id DirectoryServiceTrust#directory_id}.

---

##### `remoteDomainName`<sup>Required</sup> <a name="remoteDomainName" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.remoteDomainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#remote_domain_name DirectoryServiceTrust#remote_domain_name}.

---

##### `trustDirection`<sup>Required</sup> <a name="trustDirection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.trustDirection"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#trust_direction DirectoryServiceTrust#trust_direction}.

---

##### `trustPassword`<sup>Required</sup> <a name="trustPassword" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.trustPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#trust_password DirectoryServiceTrust#trust_password}.

---

##### `conditionalForwarderIpAddrs`<sup>Optional</sup> <a name="conditionalForwarderIpAddrs" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.conditionalForwarderIpAddrs"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#conditional_forwarder_ip_addrs DirectoryServiceTrust#conditional_forwarder_ip_addrs}.

---

##### `deleteAssociatedConditionalForwarder`<sup>Optional</sup> <a name="deleteAssociatedConditionalForwarder" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.deleteAssociatedConditionalForwarder"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#delete_associated_conditional_forwarder DirectoryServiceTrust#delete_associated_conditional_forwarder}.

---

##### `selectiveAuth`<sup>Optional</sup> <a name="selectiveAuth" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.selectiveAuth"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#selective_auth DirectoryServiceTrust#selective_auth}.

---

##### `trustType`<sup>Optional</sup> <a name="trustType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.trustType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#trust_type DirectoryServiceTrust#trust_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetConditionalForwarderIpAddrs">resetConditionalForwarderIpAddrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetDeleteAssociatedConditionalForwarder">resetDeleteAssociatedConditionalForwarder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetSelectiveAuth">resetSelectiveAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetTrustType">resetTrustType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetConditionalForwarderIpAddrs` <a name="resetConditionalForwarderIpAddrs" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetConditionalForwarderIpAddrs"></a>

```java
public void resetConditionalForwarderIpAddrs()
```

##### `resetDeleteAssociatedConditionalForwarder` <a name="resetDeleteAssociatedConditionalForwarder" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetDeleteAssociatedConditionalForwarder"></a>

```java
public void resetDeleteAssociatedConditionalForwarder()
```

##### `resetSelectiveAuth` <a name="resetSelectiveAuth" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetSelectiveAuth"></a>

```java
public void resetSelectiveAuth()
```

##### `resetTrustType` <a name="resetTrustType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetTrustType"></a>

```java
public void resetTrustType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DirectoryServiceTrust resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_trust.DirectoryServiceTrust;

DirectoryServiceTrust.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_trust.DirectoryServiceTrust;

DirectoryServiceTrust.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_trust.DirectoryServiceTrust;

DirectoryServiceTrust.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_trust.DirectoryServiceTrust;

DirectoryServiceTrust.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DirectoryServiceTrust.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DirectoryServiceTrust resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DirectoryServiceTrust to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DirectoryServiceTrust that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DirectoryServiceTrust to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.createdDateTime">createdDateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.lastUpdatedDateTime">lastUpdatedDateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.stateLastUpdatedDateTime">stateLastUpdatedDateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustState">trustState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustStateReason">trustStateReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.conditionalForwarderIpAddrsInput">conditionalForwarderIpAddrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.deleteAssociatedConditionalForwarderInput">deleteAssociatedConditionalForwarderInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.directoryIdInput">directoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.remoteDomainNameInput">remoteDomainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.selectiveAuthInput">selectiveAuthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustDirectionInput">trustDirectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustPasswordInput">trustPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustTypeInput">trustTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.conditionalForwarderIpAddrs">conditionalForwarderIpAddrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.deleteAssociatedConditionalForwarder">deleteAssociatedConditionalForwarder</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.remoteDomainName">remoteDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.selectiveAuth">selectiveAuth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustDirection">trustDirection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustPassword">trustPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustType">trustType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdDateTime`<sup>Required</sup> <a name="createdDateTime" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.createdDateTime"></a>

```java
public java.lang.String getCreatedDateTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="lastUpdatedDateTime" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.lastUpdatedDateTime"></a>

```java
public java.lang.String getLastUpdatedDateTime();
```

- *Type:* java.lang.String

---

##### `stateLastUpdatedDateTime`<sup>Required</sup> <a name="stateLastUpdatedDateTime" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.stateLastUpdatedDateTime"></a>

```java
public java.lang.String getStateLastUpdatedDateTime();
```

- *Type:* java.lang.String

---

##### `trustState`<sup>Required</sup> <a name="trustState" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustState"></a>

```java
public java.lang.String getTrustState();
```

- *Type:* java.lang.String

---

##### `trustStateReason`<sup>Required</sup> <a name="trustStateReason" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustStateReason"></a>

```java
public java.lang.String getTrustStateReason();
```

- *Type:* java.lang.String

---

##### `conditionalForwarderIpAddrsInput`<sup>Optional</sup> <a name="conditionalForwarderIpAddrsInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.conditionalForwarderIpAddrsInput"></a>

```java
public java.util.List<java.lang.String> getConditionalForwarderIpAddrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deleteAssociatedConditionalForwarderInput`<sup>Optional</sup> <a name="deleteAssociatedConditionalForwarderInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.deleteAssociatedConditionalForwarderInput"></a>

```java
public java.lang.Object getDeleteAssociatedConditionalForwarderInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.directoryIdInput"></a>

```java
public java.lang.String getDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `remoteDomainNameInput`<sup>Optional</sup> <a name="remoteDomainNameInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.remoteDomainNameInput"></a>

```java
public java.lang.String getRemoteDomainNameInput();
```

- *Type:* java.lang.String

---

##### `selectiveAuthInput`<sup>Optional</sup> <a name="selectiveAuthInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.selectiveAuthInput"></a>

```java
public java.lang.String getSelectiveAuthInput();
```

- *Type:* java.lang.String

---

##### `trustDirectionInput`<sup>Optional</sup> <a name="trustDirectionInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustDirectionInput"></a>

```java
public java.lang.String getTrustDirectionInput();
```

- *Type:* java.lang.String

---

##### `trustPasswordInput`<sup>Optional</sup> <a name="trustPasswordInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustPasswordInput"></a>

```java
public java.lang.String getTrustPasswordInput();
```

- *Type:* java.lang.String

---

##### `trustTypeInput`<sup>Optional</sup> <a name="trustTypeInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustTypeInput"></a>

```java
public java.lang.String getTrustTypeInput();
```

- *Type:* java.lang.String

---

##### `conditionalForwarderIpAddrs`<sup>Required</sup> <a name="conditionalForwarderIpAddrs" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.conditionalForwarderIpAddrs"></a>

```java
public java.util.List<java.lang.String> getConditionalForwarderIpAddrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deleteAssociatedConditionalForwarder`<sup>Required</sup> <a name="deleteAssociatedConditionalForwarder" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.deleteAssociatedConditionalForwarder"></a>

```java
public java.lang.Object getDeleteAssociatedConditionalForwarder();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `remoteDomainName`<sup>Required</sup> <a name="remoteDomainName" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.remoteDomainName"></a>

```java
public java.lang.String getRemoteDomainName();
```

- *Type:* java.lang.String

---

##### `selectiveAuth`<sup>Required</sup> <a name="selectiveAuth" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.selectiveAuth"></a>

```java
public java.lang.String getSelectiveAuth();
```

- *Type:* java.lang.String

---

##### `trustDirection`<sup>Required</sup> <a name="trustDirection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustDirection"></a>

```java
public java.lang.String getTrustDirection();
```

- *Type:* java.lang.String

---

##### `trustPassword`<sup>Required</sup> <a name="trustPassword" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustPassword"></a>

```java
public java.lang.String getTrustPassword();
```

- *Type:* java.lang.String

---

##### `trustType`<sup>Required</sup> <a name="trustType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustType"></a>

```java
public java.lang.String getTrustType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceTrustConfig <a name="DirectoryServiceTrustConfig" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_trust.DirectoryServiceTrustConfig;

DirectoryServiceTrustConfig.builder()
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
    .directoryId(java.lang.String)
    .remoteDomainName(java.lang.String)
    .trustDirection(java.lang.String)
    .trustPassword(java.lang.String)
//  .conditionalForwarderIpAddrs(java.util.List<java.lang.String>)
//  .deleteAssociatedConditionalForwarder(java.lang.Boolean)
//  .deleteAssociatedConditionalForwarder(IResolvable)
//  .selectiveAuth(java.lang.String)
//  .trustType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#directory_id DirectoryServiceTrust#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.remoteDomainName">remoteDomainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#remote_domain_name DirectoryServiceTrust#remote_domain_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustDirection">trustDirection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#trust_direction DirectoryServiceTrust#trust_direction}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustPassword">trustPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#trust_password DirectoryServiceTrust#trust_password}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.conditionalForwarderIpAddrs">conditionalForwarderIpAddrs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#conditional_forwarder_ip_addrs DirectoryServiceTrust#conditional_forwarder_ip_addrs}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.deleteAssociatedConditionalForwarder">deleteAssociatedConditionalForwarder</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#delete_associated_conditional_forwarder DirectoryServiceTrust#delete_associated_conditional_forwarder}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.selectiveAuth">selectiveAuth</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#selective_auth DirectoryServiceTrust#selective_auth}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustType">trustType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#trust_type DirectoryServiceTrust#trust_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#directory_id DirectoryServiceTrust#directory_id}.

---

##### `remoteDomainName`<sup>Required</sup> <a name="remoteDomainName" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.remoteDomainName"></a>

```java
public java.lang.String getRemoteDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#remote_domain_name DirectoryServiceTrust#remote_domain_name}.

---

##### `trustDirection`<sup>Required</sup> <a name="trustDirection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustDirection"></a>

```java
public java.lang.String getTrustDirection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#trust_direction DirectoryServiceTrust#trust_direction}.

---

##### `trustPassword`<sup>Required</sup> <a name="trustPassword" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustPassword"></a>

```java
public java.lang.String getTrustPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#trust_password DirectoryServiceTrust#trust_password}.

---

##### `conditionalForwarderIpAddrs`<sup>Optional</sup> <a name="conditionalForwarderIpAddrs" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.conditionalForwarderIpAddrs"></a>

```java
public java.util.List<java.lang.String> getConditionalForwarderIpAddrs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#conditional_forwarder_ip_addrs DirectoryServiceTrust#conditional_forwarder_ip_addrs}.

---

##### `deleteAssociatedConditionalForwarder`<sup>Optional</sup> <a name="deleteAssociatedConditionalForwarder" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.deleteAssociatedConditionalForwarder"></a>

```java
public java.lang.Object getDeleteAssociatedConditionalForwarder();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#delete_associated_conditional_forwarder DirectoryServiceTrust#delete_associated_conditional_forwarder}.

---

##### `selectiveAuth`<sup>Optional</sup> <a name="selectiveAuth" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.selectiveAuth"></a>

```java
public java.lang.String getSelectiveAuth();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#selective_auth DirectoryServiceTrust#selective_auth}.

---

##### `trustType`<sup>Optional</sup> <a name="trustType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustType"></a>

```java
public java.lang.String getTrustType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/directory_service_trust#trust_type DirectoryServiceTrust#trust_type}.

---



